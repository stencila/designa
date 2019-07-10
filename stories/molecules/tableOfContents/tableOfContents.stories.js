import { storiesOf } from '@storybook/html'

storiesOf('Molecules/Table of Contents', module).add(
  'Web Component',
  () => `
  <div>
  <div style="width: 20%; float: right;">
    <stencila-toc></stencila-toc>
  </div>

  <div style="width: 40%; float: left;">
    <article>
      <header class="heading">
        <p class="has-text-primary small">
          Nokome Bentley, 19 June 2019
        </p>
        <h1 class="title has-line has-text-primary is-1">
          From blobs to trees: semantic code analysis
        </h1>
      </header>
      <div class="content post-article-content">
        <h2 id="what-and-why%3F">
          What and why?
        </h2>
        <p>
          Semantic analysis of code aims to determine its meaning i.e. what the
          code
          <em>
            does
          </em>
          , as opposed to what its
          <em>
            shape
          </em>
          is (which is syntactic analysis). Within Stencila we do semantic
          analysis of code for two main purposes (1) code cell dependency
          analysis, and (2) package requirements analysis.
        </p>
        <p>
          We do code cell dependency analysis to enable a reactive programming
          model. This model, familiar to any user of a spreadsheet, requires a
          graph of the dependency between code cells. Currently, we do this
          analysis within execution contexts by analysing each code cell to see
          which variables are inputs and which variables are outputs. For
          example, in the
          <code>
            stencila/r
          </code>
          package by piggy backing on the
          <code>
            CodeDepends
          </code>
          package.
        </p>
        <p>
          We do package requirements analysis (i.e. work out what packages your
          code requires) within
          <code>
            dockta
          </code>
          so that we can build Docker images for a project. We do this by
          detecting package import statements. We wanted to keep that code
          within Javascript, rather that having to rely on being able to spawn a
          R or Python session just to determine which packages are needed by
          some code. For R and Python we do that using regular expressions (e.g.
          for Python). For Javascript, we use the
          <code>
            detective
          </code>
          package which parses the entire source code to find
          <code>
            require()
          </code>
          calls.
        </p>
        <h2 id="trees-from-blobs">
          Trees from blobs
        </h2>
        <p>
          Instead of doing these different forms of semantic analysis using
          different methods (i.e. regexes v parsing and AST walking) within
          different environments (i.e. within R v within Python v within
          Javascript) we are planning to consolidate this functionality within
          Encoda. It's a natural fit for Encoda because that's the place where
          we handle the parsing of "blobs" of content (e.g. a binary blob of a
          <code>
            .docx
          </code>
          , or a text blob of Markdown) into a tree of structured, semantic,
          document nodes. Our plan is to treat source code in the same way as
          these other formats taking blobs of source code (e.g a Python script,
          or a R code cell) and parsing into a tree of nodes that can that be
          analysed for different purposes (e.g. package requirements analysis or
          cell dependency analysis).
        </p>
        <p>
          <img src="./wanaka-tree.jpg" alt="" />
        </p>
        <p>
          <em>
            The "Lake Tree", Wanaka, NZ. Bernard Spragg, CC0 1.0 Universal.
          </em>
        </p>
        <h2 id="github's-semantic-library">
          Github's Semantic Library
        </h2>
        <p>
          Given that, last week I was interested to see Github introduce a
          "jump-to-definition" feature. Under the hood, that feature uses
          Github's own Haskell library for semantic code analysis, Semantic.
        </p>
        <p>
          As the README says, Semantic basically:
        </p>
        <ol>
          <li>
            Reads blobs [of raw source code].
          </li>
          <li>
            Generates parse trees for those blobs with
            <code>
              tree-sitter
            </code>
            (an incremental parsing system for programming tools).
          </li>
          <li>
            Assigns those trees into a generalized representation of syntax.
          </li>
          <li>
            Performs analysis, computes diffs, or just returns parse trees.
          </li>
          <li>
            Renders output in one of many supported formats.
          </li>
        </ol>
        <p>
          The part of that I was most excited about was "generalized
          representation of syntax". It would be great if we had a program that
          we could leverage in Encoda for semantic analysis of source code, in
          the same way that we use Pandoc for text documents. I had previously
          looked at Babelfish and its Universal Abstract Syntax Tree (UAST) for
          this but hadn't yet experimented with it.
        </p>
        <h2 id="test-driving-semantic">
          Test driving Semantic
        </h2>
        <p>
          I was interested to see what the tree generated by Semantic looked
          like. Specifically, how it parsed
          <code>
            import
          </code>
          statements and whether it was a viable solution to replace the current
          regex based approach we use in Dockta. So, I took it for a test
          drive...
        </p>
        <p>
          After a brief, failed, attempt at building locally (on Ubuntu 16.04),
          I opted to build Semantic's Docker image instead:
        </p>
        <pre class=" language-bash">
<code class=" language-bash">
git clone git@github.com:github/semanticcd semanticdocker build --tag semantic .
</code>
</pre>
        <p>
          You can then run it against some test files using Docker's
          <code>
            run
          </code>
          command:
        </p>
        <pre class=" language-bash">
<code class=" language-bash">
docker run -v $(pwd):/work semantic parse /work/test.py
</code>
</pre>
        <p>
          Let's unpack that command a little:
        </p>
        <ul>
          <li>
            the
            <code>
              -v $(pwd):/work
            </code>
            option mounts the current working directory into the container at
            <code>
              /work
            </code>
            (it's a useful way for easily running a containerized executable on
            local files without having to put them into the container)
          </li>
          <li>
            the
            <code>
              semantic parse --json /work/test.py
            </code>
            part is where we tell Semantic to parse
            <code>
              test.py
            </code>
            and output JSON
          </li>
        </ul>
        <p>
          Currently, Semantic supports Ruby, JavaScript, TypeScript, Python, Go,
          PHP, Java, JSON, JSX, Haskell and Markdown. I created three test files
          for Python, JavaScript and Go which have similar import statement
          semantics.
        </p>
        <p>
          <strong>
            test.py
          </strong>
        </p>
        <pre class=" language-python">
<code class=" language-python">
import modfrom mod import a as b
</code>
</pre>
        <p>
          <strong>
            test.js
          </strong>
        </p>
        <pre class=" language-javascript">
<code class=" language-javascript">
import mod from 'mod'import {a as b} from 'mod'
</code>
</pre>
        <p>
          <strong>
            test.go
          </strong>
        </p>
        <pre class=" language-javascript">
<code class=" language-javascript">
import "mod"import alias "mod"
</code>
</pre>
        <p>
          And then parsed each of these files into S-expressions to examine the
          basic structure of the generated tree:
        </p>
        <pre class=" language-bash">
<code class=" language-bash">
&gt; docker run -v $(pwd):/work semantic parse /work/test.js(Statements (Import) (Import))
</code>
</pre>
        <pre class=" language-bash">
<code class=" language-bash">
&gt; docker run -v $(pwd):/work semantic parse /work/test.py(Statements (QualifiedImport (Identifier)) (Import (Alias (Identifier) (Identifier))))
</code>
</pre>
        <pre class=" language-bash">
<code class=" language-bash">
docker run -v (pwd):/work semantic parse /work/test.go(Statements (QualifiedImport (Identifier)) (QualifiedImport (Identifier)))
</code>
</pre>
        <p>
          I was hoping Semantic would return a relatively simple tree using its
          "generalized representation of syntax" and that the trees would be
          similar across languages. Instead, I was surprised at how much
          variation there was in node types in each of the trees.
        </p>
        <p>
          To further look into these trees, I generated JSON using the
          <code>
            --json
          </code>
          flag. If we were to use Semantic in Encoda, this would be our primary
          interface between the two. The results (below) confirm the diversity
          of node types. We could write code to normalize these trees but that
          seems to defeat the purpose of using Semantic.
        </p>
        <p>
          We'll definitely keep an eye on Semantic, but in the short term, at
          least for doing package requirements analysis, despite their potential
          problems, we'll probably stick to using regexes.
        </p>
        <h2 id="appendix">
          Appendix
        </h2>
        <p>
          For brevity, the JSON outputs below don't include
          <code>
            sourceRange
          </code>
          and
          <code>
            sourceSpan
          </code>
          properties that provide information on the location of a node in the
          source file.
        </p>
        <p>
          <strong>
            JSON output from parsing
            <code>
              test.py
            </code>
          </strong>
        </p>
        <pre class=" language-json">
<code class=" language-json">
{ "trees": [ { "path": "/work/test.py", "language": "Python", "tree": { "term": "Statements", "statements": [ { "term": "QualifiedImport", "qualifiedImportFrom": [ { "term": "Identifier", "name": "mod" } ] }, { "term": "Import", "importFrom": { "tag": "QualifiedName", "paths": [ "mod" ] }, "importSymbols": [ { "term": "Alias", "aliasName": { "term": "Identifier", "name": "b" }, "aliasValue": { "term": "Identifier", "name": "a" } } ] } ] } } ]}
</code>
</pre>
        <p>
          <strong>
            JSON output from parsing
            <code>
              test.js
            </code>
          </strong>
        </p>
        <pre class=" language-json">
<code class=" language-json">
{ "trees": [ { "path": "/work/test.js", "language": "JavaScript", "tree": { "term": "Statements", "statements": [ { "term": "Import", "importFrom": { "pathIsRelative": "NonRelative", "unPath": "mod" }, "importSymbols": [ { "aliasName": "mod", "aliasValue": "mod" } ] }, { "term": "Import", "importFrom": { "pathIsRelative": "NonRelative", "unPath": "mod" }, "importSymbols": [ { "aliasName": "b", "aliasValue": "a" } ] } ] } } ]}
</code>
</pre>
      </div>
    </article>
  </div>
</div>`
)
