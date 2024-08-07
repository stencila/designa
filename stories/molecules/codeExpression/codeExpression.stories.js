import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Code Expression',
  component: 'stencila-code-expression',
}

const handler = (e) => {
  console.log(e)
  return {
    type: 'CodeExpression',
    output: `Results of ${e.text}`,
  }
}

export const codeExpression = () => html`
  <div>
    <stencila-code-expression
      programming-language="r"
      .executeHandler=${handler}
    >
      <code class="r" slot="text"
        >length(subset(data2, Lot==1 &amp; Time==0)$value)</code
      >
      <output slot="output">3</output>
    </stencila-code-expression>

    <br />

    <stencila-code-expression
      .executeHandler=${handler}
      programming-language="r"
      compile-digest="8Jcxdr_uog8nU85IWbSHJ67aACMkRhrjSlNq4U87zOI.WTk2LOm4gZ0UmUlT0XWdef-3W6JVajT2Zwas1meIYDI..0"
      execute-required="NeverExecuted"
      execute-digest="8Jcxdr_uog8nU85IWbSHJ67aACMkRhrjSlNq4U87zOI.WTk2LOm4gZ0UmUlT0XWdef-3W6JVajT2Zwas1meIYDI..0"
      execute-status="Failed"
      execute-ended="2022-01-12T19:08:38.984790+00:00"
      execute-duration="0.004765"
    >
      <code slot="text">print(&#x27;foo&#x27;)</code>
      <stencila-code-dependencies slot="code-dependencies">
      </stencila-code-dependencies>
      <output slot="output">
        <pre itemscope>foo</pre>
      </output>
      <span slot="errors"> </span>
    </stencila-code-expression>
  </div>
`

export const codeExpressionInAParagraph = () => html`
  <p>
    This is a paragraph
    <stencila-code-expression
      programming-language="r"
      compile-digest="8Jcxdr_uog8nU85IWbSHJ67aACMkRhrjSlNq4U87zOI.WTk2LOm4gZ0UmUlT0XWdef-3W6JVajT2Zwas1meIYDI..0"
      execute-required="NeverExecuted"
      execute-digest="8Jcxdr_uog8nU85IWbSHJ67aACMkRhrjSlNq4U87zOI.WTk2LOm4gZ0UmUlT0XWdef-3W6JVajT2Zwas1meIYDI..0"
      execute-status="Succeeded"
      execute-ended="2022-01-12T19:08:38.984790+00:00"
      execute-duration="0.004765"
    >
      <code slot="text">print(&#x27;foo&#x27;)</code>
      <stencila-code-dependencies slot="code-dependencies">
      </stencila-code-dependencies>
      <output slot="output">
        <pre itemscope>foo</pre>
      </output>
      <span slot="errors"> </span>
    </stencila-code-expression>
    with a code expression inside it
    <stencila-code-expression data-collapsed="false">
      <code slot="text">x * y </code>
      <output slot="output">42</output></stencila-code-expression
    >
    followed by some more text.
  </p>
`

export const multipleCodeExpressionsInAParagraph = () => html`
  <p>
    This is a paragraph with a code expression inside it
    <stencila-code-expression data-collapsed="false">
      <code slot="text">x * y</code>
      <output slot="output">42</output></stencila-code-expression
    >
    followed by some more text and another
    <stencila-code-expression data-collapsed="false">
      <code slot="text">x * y - 128 * (212 - 2)</code>
      <output slot="output">
        Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output
      </output> </stencila-code-expression
    >.
  </p>
`

export const codeExpressionWithAnImageOutput = () => html`
  <p>
    This is a paragraph with a code expression inside it
    <stencila-code-expression data-collapsed="false"
      ><code slot="text">x * y</code
      ><output slot="output">42</output></stencila-code-expression
    >
    followed by some more text and another
    <stencila-code-expression data-collapsed="false">
      <code slot="text">x * y - 128 * (212 - 2)</code>
      <output slot="output"
        ><img src="https://place-hold.it/150x200"
      /></output> </stencila-code-expression
    >.
  </p>
`

export const codeExpressionWithNoOutputSlot = () => html`
  <p>
    This is a paragraph with a code expression inside it
    <stencila-code-expression data-collapsed="false"
      ><code slot="text">x * y</code></stencila-code-expression
    >
    followed by some more text.
  </p>
`

export const codeExpressionWithNoOutputContent = () => html`
  <p>
    This is a paragraph with a code expression inside it
    <stencila-code-expression data-collapsed="false"
      ><code slot="text">x * y</code><output slot="output"></output
    ></stencila-code-expression>
    followed by some more text.
  </p>
`

export const codeExpressionWithSymbolsInOutput = () => html`
  <p>
    This is a paragraph with a code expression inside it
    <stencila-code-expression data-collapsed="false"
      ><code slot="text">x * y</code
      ><output slot="output">&lt;0.001</output></stencila-code-expression
    >
    followed by some more text.
  </p>
`

export const fullStory = () => html`
  <div>
    <p>
      <span>This fixture is focussed on dependency relations between </span
      ><stencila-code-fragment id="cf-1"
        ><code slot="text">CodeChunk</code></stencila-code-fragment
      ><span>, </span
      ><stencila-code-fragment id="cf-2"
        ><code slot="text">CodeExpression</code></stencila-code-fragment
      ><span> and </span
      ><stencila-code-fragment id="cf-3"
        ><code slot="text">Parameter</code></stencila-code-fragment
      ><span>
        nodes within a document. Relations are established by assignment and
        usage of variables. For simplicity, it only uses </span
      ><stencila-code-fragment id="cf-4"
        ><code slot="text">Calc</code></stencila-code-fragment
      ><span> as a language in code nodes.</span>
    </p>
    <p>
      <span>A </span
      ><stencila-code-fragment id="cf-5"
        ><code slot="text">CodeChunk</code></stencila-code-fragment
      ><span> that assigns a variable </span
      ><stencila-code-fragment id="cf-6"
        ><code slot="text">a</code></stencila-code-fragment
      ><span
        >, and which is always autorun when downstream dependents are run. When
        manual testing you may wish to set </span
      ><stencila-code-fragment id="cf-7"
        ><code slot="text">a = now()</code></stencila-code-fragment
      ><span>
        to see the effect of this (for deterministic test snapshots this is not
        done by default).</span
      >
    </p>
    <stencila-code-chunk
      id="cc-1"
      programming-language="calc"
      compile-digest="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0"
      execute-digest="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0"
      execute-required="No"
      execute-status="Succeeded"
      execute-ended="2022-01-13T16:41:41.041106+00:00"
      execute-duration="0.000142"
    >
      <pre slot="text">
# @autorun always
a = 1
a</pre
      >
      <stencila-code-dependencies
        slot="code-dependencies"
      ></stencila-code-dependencies
      ><stencila-code-dependents
        slot="code-dependents"
      ></stencila-code-dependents>
      <div slot="outputs">
        <span>1</span>
      </div>
      <div slot="errors"></div>
      <span slot="label"></span>
      <figcaption slot="caption"></figcaption
    ></stencila-code-chunk>
    <p>
      <span>Another chunk that uses </span
      ><stencila-code-fragment id="cf-8"
        ><code slot="text">a</code></stencila-code-fragment
      ><span>:</span>
    </p>
    <stencila-code-chunk
      id="cc-2"
      programming-language="calc"
      compile-digest="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
      execute-digest="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
      execute-required="No"
      execute-status="Succeeded"
      execute-ended="2022-01-13T16:41:31.623849+00:00"
      execute-duration="0.000356"
    >
      <pre slot="text">a * 2</pre>
      <stencila-code-dependencies slot="code-dependencies"
        ><stencila-code-dependency
          node-type="CodeChunk"
          node-id="cc-1"
          execute-required="No"
          execute-status="Succeeded"
          programming-language="calc"
        ></stencila-code-dependency></stencila-code-dependencies
      ><stencila-code-dependents
        slot="code-dependents"
      ></stencila-code-dependents>
      <div slot="outputs">
        <span>2</span>
      </div>
      <div slot="errors"></div>
      <span slot="label"></span>
      <figcaption slot="caption"></figcaption
    ></stencila-code-chunk>
    <p>
      <span>and some </span
      ><stencila-code-fragment id="cf-9"
        ><code slot="text">CodeExpression</code></stencila-code-fragment
      ><span>s that also use it: </span
      ><stencila-code-expression
        id="ce-1"
        programming-language="calc"
        compile-digest="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
        execute-digest="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-13T16:41:35.212679+00:00"
        execute-duration="0.000117"
        ><code slot="text">a * 3</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>3</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span> and </span
      ><stencila-code-expression
        id="ce-2"
        programming-language="calc"
        compile-digest="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
        execute-digest="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-13T16:41:36.779336+00:00"
        execute-duration="0.000145"
        ><code slot="text">a * 4</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>4</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span>.</span>
    </p>
    <p>
      <span>A chunk that derives another variable </span
      ><stencila-code-fragment id="cf-10"
        ><code slot="text">b</code></stencila-code-fragment
      ><span> from </span
      ><stencila-code-fragment id="cf-11"
        ><code slot="text">a</code></stencila-code-fragment
      ><span> and never gets autorun (must be explicitly run):</span>
    </p>
    <stencila-code-chunk
      id="cc-3"
      programming-language="calc"
      compile-digest="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
      execute-digest="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1"
      execute-required="No"
      execute-status="Succeeded"
      execute-ended="2022-01-13T16:41:38.668337+00:00"
      execute-duration="0.000229"
    >
      <pre slot="text">
# @autorun never
b = a + 1
b</pre
      >
      <stencila-code-dependencies slot="code-dependencies"
        ><stencila-code-dependency
          node-type="CodeChunk"
          node-id="cc-1"
          execute-required="No"
          execute-status="Succeeded"
          programming-language="calc"
        ></stencila-code-dependency></stencila-code-dependencies
      ><stencila-code-dependents
        slot="code-dependents"
      ></stencila-code-dependents>
      <div slot="outputs">
        <span>2</span>
      </div>
      <div slot="errors"></div>
      <span slot="label"></span>
      <figcaption slot="caption"></figcaption
    ></stencila-code-chunk>
    <p>
      <span>and some expressions that also use it: </span
      ><stencila-code-expression
        id="ce-3"
        programming-language="calc"
        compile-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-13T16:41:39.984972+00:00"
        execute-duration="0.000102"
        ><code slot="text">b * 1</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="Yes"
            execute-status="Failed"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>2</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span> and </span
      ><stencila-code-expression
        id="ce-4"
        programming-language="calc"
        compile-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Cancelled"
        execute-ended="2022-01-13T16:41:41.046359+00:00"
        execute-duration="0.000103"
        ><code slot="text">b * 2</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Scheduled"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>4</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span>.</span>
    </p>

    <p>
      <span>and some expressions that also use it: </span
      ><stencila-code-expression
        id="ce-3"
        programming-language="calc"
        compile-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Failed"
        execute-ended="2022-01-13T16:41:39.984972+00:00"
        execute-duration="0.000102"
        ><code slot="text">b * 1</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="Yes"
            execute-status="Failed"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>2</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span> and </span
      ><stencila-code-expression
        id="ce-4"
        programming-language="calc"
        compile-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Cancelled"
        execute-ended="2022-01-13T16:41:41.046359+00:00"
        execute-duration="0.000103"
        ><code slot="text">b * 2</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Scheduled"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>4</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span>.</span>
    </p>

    <p>
      <span>and some expressions that also use it: </span
      ><stencila-code-expression
        id="ce-3"
        programming-language="calc"
        compile-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="NeverExecuted"
        execute-status="Succeeded"
        execute-ended="2022-01-13T16:41:39.984972+00:00"
        execute-duration="0.000102"
        ><code slot="text">b * 1</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="Yes"
            execute-status="Failed"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>2</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span> and </span
      ><stencila-code-expression
        id="ce-4"
        programming-language="calc"
        compile-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="SemanticsChanged"
        execute-status="Succeeded"
        execute-ended="2022-01-13T16:41:41.046359+00:00"
        execute-duration="0.000103"
        ><code slot="text">b * 2</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Scheduled"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>4</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span>.</span>
    </p>
    <p>
      <span>A </span
      ><stencila-code-fragment id="cf-12"
        ><code slot="text">Parameter</code></stencila-code-fragment
      ><span> that sets a third symbol </span
      ><stencila-code-fragment id="cf-13"
        ><code slot="text">c</code></stencila-code-fragment
      ><span> : </span
      ><stencila-parameter id="pa-1"
        ><label slot="name" for="in-edm5QdfyKgpLSIcD5G1T"
          >c</label
        ></stencila-parameter
      >
    </p>
    <p>
      <span>And a code chunk that uses all three variables:</span>
    </p>
    <stencila-code-chunk
      id="cc-4"
      programming-language="calc"
      compile-digest="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.3"
      execute-digest="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.3"
      execute-required="SemanticsChanged"
      execute-status="Cancelled"
      execute-ended="2022-01-13T16:41:38.672128+00:00"
      execute-duration="0.000162"
    >
      <pre slot="text">a + b + c</pre>
      <stencila-code-dependencies slot="code-dependencies"
        ><stencila-code-dependency
          node-type="Parameter"
          node-id="pa-1"
          name="c"
        ></stencila-code-dependency
        ><stencila-code-dependency
          node-type="CodeChunk"
          node-id="cc-1"
          execute-required="No"
          execute-status="Succeeded"
          programming-language="calc"
        ></stencila-code-dependency
        ><stencila-code-dependency
          node-type="CodeChunk"
          node-id="cc-3"
          execute-required="No"
          execute-status="Cancelled"
          programming-language="calc"
        ></stencila-code-dependency></stencila-code-dependencies
      ><stencila-code-dependents
        slot="code-dependents"
      ></stencila-code-dependents>
      <div slot="outputs">
        <span>4</span>
      </div>
      <div slot="errors"></div>
      <span slot="label"></span>
      <figcaption slot="caption"></figcaption
    ></stencila-code-chunk>
    <p>
      <span>and some expressions that also use it: </span
      ><stencila-code-expression
        id="ce-3"
        programming-language="calc"
        compile-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Scheduled"
        execute-ended="2022-01-13T16:41:39.984972+00:00"
        execute-duration="0.000102"
        ><code slot="text">b * 1</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="Yes"
            execute-status="Failed"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>2</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span> and </span
      ><stencila-code-expression
        id="ce-4"
        programming-language="calc"
        compile-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.1"
        execute-required="No"
        execute-status="Cancelled"
        execute-ended="2022-01-13T16:41:41.046359+00:00"
        execute-duration="0.000103"
        ><code slot="text">b * 2</code
        ><stencila-code-dependencies slot="code-dependencies"
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-1"
            execute-required="No"
            execute-status="Succeeded"
            programming-language="calc"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-type="CodeChunk"
            node-id="cc-3"
            execute-required="No"
            execute-status="Scheduled"
            programming-language="calc"
          ></stencila-code-dependency></stencila-code-dependencies
        ><output slot="output"><span>4</span></output
        ><span slot="errors"></span></stencila-code-expression
      ><span>.</span>
    </p>
  </div>
`

export const dependencyNodes = () => html`
  <article
    data-itemscope="root"
    itemtype="http://schema.org/Article"
    itemscope=""
  >
    <div data-itemprop="content">
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>This fixture is focussed on dependency relations between </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-1"
          ><code itemprop="text" slot="text"
            >CodeChunk</code
          ></stencila-code-fragment
        ><span>, </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-2"
          ><code itemprop="text" slot="text"
            >CodeExpression</code
          ></stencila-code-fragment
        ><span> and </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-3"
          ><code itemprop="text" slot="text"
            >Parameter</code
          ></stencila-code-fragment
        ><span>
          nodes within a document. Relations are established by assignment and
          usage of variables. For simplicity, it only uses </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-4"
          ><code itemprop="text" slot="text">Calc</code></stencila-code-fragment
        ><span> as a language in code nodes.</span>
      </p>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>A </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-5"
          ><code itemprop="text" slot="text"
            >CodeChunk</code
          ></stencila-code-fragment
        ><span> that assigns a variable </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-6"
          ><code itemprop="text" slot="text">a</code></stencila-code-fragment
        ><span
          >, and which is always autorun when downstream dependents are run.
          When manual testing you may wish to set </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-7"
          ><code itemprop="text" slot="text"
            >a = now()</code
          ></stencila-code-fragment
        ><span>
          to see the effect of this (for deterministic test snapshots this is
          not done by default).</span
        >
      </p>
      <stencila-code-chunk
        itemtype="http://schema.stenci.la/CodeChunk"
        itemscope=""
        id="cc-1"
        programming-language="calc"
        compile-digest="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0.0"
        execute-digest="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0.0"
        execute-auto="Always"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-18T18:33:07.821794+00:00"
        execute-duration="0.000166"
        ><meta itemprop="programmingLanguage" content="calc" /><meta
          itemprop="compileDigest"
          content="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0.0" /><meta
          itemprop="executeDigest"
          content="Tvt1ilqkzMqkbonWFun97yUtcI6unFBZMKXzFK3A0QQ.cSI6l7J-C3NXWHVLVurgbQlumKe3QjGqYN6zrFfMhMM..0.0" /><meta
          itemprop="executeAuto"
          content="Always" /><meta
          itemprop="executeRequired"
          content="No" /><meta
          itemprop="executeStatus"
          content="Succeeded" /><meta
          itemprop="executeEnded"
          content="2022-01-18T18:33:07.821794+00:00" /><meta
          itemprop="executeDuration"
          content="0.000166" />
        <pre data-itemprop="text" slot="text">
# @autorun always
 a = 1
 a</pre
        >
        <stencila-code-dependencies
          data-itemprop="codeDependencies"
          slot="code-dependencies"
        ></stencila-code-dependencies
        ><stencila-code-dependencies
          data-itemprop="codeDependents"
          slot="code-dependents"
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-2"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-1"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-2"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-3"
            programming-language="calc"
            execute-auto="Never"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-3"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Running"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-3"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-4"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
        ></stencila-code-dependencies>
        <div data-itemprop="outputs" slot="outputs">
          <span itemtype="http://schema.stenci.la/Number" itemscope="">1</span>
        </div>
        <div data-itemprop="errors" slot="errors"></div>
        <span data-itemprop="label" slot="label"></span>
        <figcaption data-itemprop="caption" slot="caption"></figcaption
      ></stencila-code-chunk>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>Another chunk that uses </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-8"
          ><code itemprop="text" slot="text">a</code></stencila-code-fragment
        ><span>:</span>
      </p>
      <stencila-code-chunk
        itemtype="http://schema.stenci.la/CodeChunk"
        itemscope=""
        id="cc-2"
        programming-language="calc"
        compile-digest="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0"
        execute-digest="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-18T18:32:20.158918+00:00"
        execute-duration="0.000456"
        ><meta itemprop="programmingLanguage" content="calc" /><meta
          itemprop="compileDigest"
          content="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0" /><meta
          itemprop="executeDigest"
          content="GXkR7WzluQeHlWpgFstC1vLFs35veOtBe9QfEDuhjLI.nh_hPQhnXRlBiSBOhC-26iqBQeRPMBA4OJ1Ml9T33IY.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0" /><meta
          itemprop="executeRequired"
          content="No" /><meta
          itemprop="executeStatus"
          content="Succeeded" /><meta
          itemprop="executeEnded"
          content="2022-01-18T18:32:20.158918+00:00" /><meta
          itemprop="executeDuration"
          content="0.000456" />
        <pre data-itemprop="text" slot="text">a * 2</pre>
        <stencila-code-dependencies
          data-itemprop="codeDependencies"
          slot="code-dependencies"
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-1"
            programming-language="calc"
            execute-auto="Always"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency></stencila-code-dependencies
        ><stencila-code-dependencies
          data-itemprop="codeDependents"
          slot="code-dependents"
        ></stencila-code-dependencies>
        <div data-itemprop="outputs" slot="outputs">
          <span itemtype="http://schema.stenci.la/Number" itemscope="">2</span>
        </div>
        <div data-itemprop="errors" slot="errors"></div>
        <span data-itemprop="label" slot="label"></span>
        <figcaption data-itemprop="caption" slot="caption"></figcaption
      ></stencila-code-chunk>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>and some </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-9"
          ><code itemprop="text" slot="text"
            >CodeExpression</code
          ></stencila-code-fragment
        ><span>s that also use it: </span
        ><stencila-code-expression
          itemtype="http://schema.stenci.la/CodeExpression"
          itemscope=""
          id="ce-1"
          programming-language="calc"
          compile-digest="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0"
          execute-digest="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0"
          execute-required="No"
          execute-status="Succeeded"
          execute-ended="2022-01-18T18:32:20.163256+00:00"
          execute-duration="0.000651"
          ><meta itemprop="programmingLanguage" content="calc" /><meta
            itemprop="compileDigest"
            content="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0" /><meta
            itemprop="executeDigest"
            content="5vFFLK9PlUPQ_3BqZ6mmkwOS6N3mAbgK2RgSSmMFCJ0.v8xJ_Bw14WouYXGUyTn2bePyCsd7eCYvhEmLHNimv10.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0" /><meta
            itemprop="executeRequired"
            content="No" /><meta
            itemprop="executeStatus"
            content="Succeeded" /><meta
            itemprop="executeEnded"
            content="2022-01-18T18:32:20.163256+00:00" /><meta
            itemprop="executeDuration"
            content="0.000651" /><code data-itemprop="text" slot="text"
            >a * 3</code
          ><stencila-code-dependencies
            data-itemprop="codeDependencies"
            slot="code-dependencies"
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-1"
              programming-language="calc"
              execute-auto="Always"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency></stencila-code-dependencies
          ><output data-itemprop="output" slot="output"
            ><span itemtype="http://schema.stenci.la/Number" itemscope=""
              >3</span
            ></output
          ><span
            data-itemprop="errors"
            slot="errors"
          ></span></stencila-code-expression
        ><span> and </span
        ><stencila-code-expression
          itemtype="http://schema.stenci.la/CodeExpression"
          itemscope=""
          id="ce-2"
          programming-language="calc"
          compile-digest="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0"
          execute-digest="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0"
          execute-required="No"
          execute-status="Succeeded"
          execute-ended="2022-01-18T18:32:20.155165+00:00"
          execute-duration="0.000265"
          ><meta itemprop="programmingLanguage" content="calc" /><meta
            itemprop="compileDigest"
            content="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0" /><meta
            itemprop="executeDigest"
            content="MbSHMsqe4WgCFlwGviQpo7ie6BFo2eJXiebtlL8MBbI.u-ZxGlUEKMqo4UdU997v5JUeHzEbqxrxpiqqqKEjgBo.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.1.0" /><meta
            itemprop="executeRequired"
            content="No" /><meta
            itemprop="executeStatus"
            content="Succeeded" /><meta
            itemprop="executeEnded"
            content="2022-01-18T18:32:20.155165+00:00" /><meta
            itemprop="executeDuration"
            content="0.000265" /><code data-itemprop="text" slot="text"
            >a * 4</code
          ><stencila-code-dependencies
            data-itemprop="codeDependencies"
            slot="code-dependencies"
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-1"
              programming-language="calc"
              execute-auto="Always"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency></stencila-code-dependencies
          ><output data-itemprop="output" slot="output"
            ><span itemtype="http://schema.stenci.la/Number" itemscope=""
              >4</span
            ></output
          ><span
            data-itemprop="errors"
            slot="errors"
          ></span></stencila-code-expression
        ><span>.</span>
      </p>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>A chunk that derives another variable </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-10"
          ><code itemprop="text" slot="text">b</code></stencila-code-fragment
        ><span> from </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-11"
          ><code itemprop="text" slot="text">a</code></stencila-code-fragment
        ><span> and never gets autorun (must be explicitly run):</span>
      </p>
      <stencila-code-chunk
        itemtype="http://schema.stenci.la/CodeChunk"
        itemscope=""
        id="cc-3"
        programming-language="calc"
        compile-digest="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0"
        execute-digest="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0"
        execute-auto="Never"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-18T18:33:07.838724+00:00"
        execute-duration="0.0002"
        ><meta itemprop="programmingLanguage" content="calc" /><meta
          itemprop="compileDigest"
          content="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0" /><meta
          itemprop="executeDigest"
          content="8fu7AlpXiNp1R2KwSLy_SWs_iZzx8CY3eL-wVpofNAQ.nfQpoBKEuoIW8JVJVcp7gA35783IoA_ciPFWPFSaed8.HhVSCU6G4nyKhaM3OrePODVEvGKILAcIBHeL5KeJlIQ.0.0" /><meta
          itemprop="executeAuto"
          content="Never" /><meta
          itemprop="executeRequired"
          content="No" /><meta
          itemprop="executeStatus"
          content="Succeeded" /><meta
          itemprop="executeEnded"
          content="2022-01-18T18:33:07.838724+00:00" /><meta
          itemprop="executeDuration"
          content="0.0002" />
        <pre data-itemprop="text" slot="text">
# @autorun never
 b = a + 1
 b</pre
        >
        <stencila-code-dependencies
          data-itemprop="codeDependencies"
          slot="code-dependencies"
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-1"
            programming-language="calc"
            execute-auto="Always"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency></stencila-code-dependencies
        ><stencila-code-dependencies
          data-itemprop="codeDependents"
          slot="code-dependents"
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-3"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Running"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeExpression"
            node-id="ce-3"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-4"
            programming-language="calc"
            execute-auto="Needed"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
        ></stencila-code-dependencies>
        <div data-itemprop="outputs" slot="outputs">
          <span itemtype="http://schema.stenci.la/Number" itemscope="">2</span>
        </div>
        <div data-itemprop="errors" slot="errors"></div>
        <span data-itemprop="label" slot="label"></span>
        <figcaption data-itemprop="caption" slot="caption"></figcaption
      ></stencila-code-chunk>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>and some expressions that also use it: </span
        ><stencila-code-expression
          itemtype="http://schema.stenci.la/CodeExpression"
          itemscope=""
          id="ce-3"
          programming-language="calc"
          compile-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0"
          execute-digest="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0"
          execute-required="No"
          execute-status="Succeeded"
          execute-ended="2022-01-18T18:33:07.875939+00:00"
          execute-duration="0.000163"
          ><meta itemprop="programmingLanguage" content="calc" /><meta
            itemprop="compileDigest"
            content="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0" /><meta
            itemprop="executeDigest"
            content="4wxAgWB65X0l0qR31Eezb9f6FRJ3J2VJATd5amdGD1o.NEwPns0Ln5AvblNQiOxE55WuSp3Lq1AcFVodSUvJiL8.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0" /><meta
            itemprop="executeRequired"
            content="No" /><meta
            itemprop="executeStatus"
            content="Succeeded" /><meta
            itemprop="executeEnded"
            content="2022-01-18T18:33:07.875939+00:00" /><meta
            itemprop="executeDuration"
            content="0.000163" /><code data-itemprop="text" slot="text"
            >b * 1</code
          ><stencila-code-dependencies
            data-itemprop="codeDependencies"
            slot="code-dependencies"
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-1"
              programming-language="calc"
              execute-auto="Always"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-3"
              programming-language="calc"
              execute-auto="Never"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency></stencila-code-dependencies
          ><output data-itemprop="output" slot="output"
            ><span itemtype="http://schema.stenci.la/Number" itemscope=""
              >2</span
            ></output
          ><span
            data-itemprop="errors"
            slot="errors"
          ></span></stencila-code-expression
        ><span> and </span
        ><stencila-code-expression
          itemtype="http://schema.stenci.la/CodeExpression"
          itemscope=""
          id="ce-4"
          programming-language="calc"
          compile-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0"
          execute-digest="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0"
          execute-required="No"
          execute-status="Succeeded"
          execute-ended="2022-01-18T18:33:07.858721+00:00"
          execute-duration="0.000226"
          ><meta itemprop="programmingLanguage" content="calc" /><meta
            itemprop="compileDigest"
            content="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0" /><meta
            itemprop="executeDigest"
            content="QKuMwjpkYoQH-jlp9EcheEeb38xk_Rf0UhOxgNmnnAk.G34cpLFC4Fi3PXZ5ql3bZ5_qpNPh7QGanFH7UBmOA7g.D3hcVVpy-IvARfm9AuHwoX5Gu6XDD-QA07pHJJvfRvM.0.0" /><meta
            itemprop="executeRequired"
            content="No" /><meta
            itemprop="executeStatus"
            content="Succeeded" /><meta
            itemprop="executeEnded"
            content="2022-01-18T18:33:07.858721+00:00" /><meta
            itemprop="executeDuration"
            content="0.000226" /><code data-itemprop="text" slot="text"
            >b * 2</code
          ><stencila-code-dependencies
            data-itemprop="codeDependencies"
            slot="code-dependencies"
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-1"
              programming-language="calc"
              execute-auto="Always"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency
            ><stencila-code-dependency
              node-kind="CodeChunk"
              node-id="cc-3"
              programming-language="calc"
              execute-auto="Never"
              execute-required="No"
              execute-status="Succeeded"
            ></stencila-code-dependency></stencila-code-dependencies
          ><output data-itemprop="output" slot="output"
            ><span itemtype="http://schema.stenci.la/Number" itemscope=""
              >4</span
            ></output
          ><span
            data-itemprop="errors"
            slot="errors"
          ></span></stencila-code-expression
        ><span>.</span>
      </p>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>A </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-12"
          ><code itemprop="text" slot="text"
            >Parameter</code
          ></stencila-code-fragment
        ><span> that sets a third symbol </span
        ><stencila-code-fragment
          itemtype="http://schema.stenci.la/CodeFragment"
          itemscope=""
          id="cf-13"
          ><code itemprop="text" slot="text">c</code></stencila-code-fragment
        ><span> : </span
        ><stencila-parameter
          itemtype="http://schema.stenci.la/Parameter"
          itemscope=""
          id="pa-1"
          ><label data-itemprop="name" slot="name" for="in-LMzRAaOSmJgw2YgHq2FB"
            >c</label
          ><meta
            itemprop="validator"
            itemtype="http://schema.stenci.la/NumberValidator"
            itemscope="" /><meta
            itemprop="default"
            itemtype="http://schema.stenci.la/Integer"
            itemscope=""
            content="1" /><meta itemprop="value" /><input
            id="in-LMzRAaOSmJgw2YgHq2FB"
            slot="value"
            type="number"
            min="0"
            max="10"
            placeholder="1"
        /></stencila-parameter>
      </p>
      <p itemtype="http://schema.stenci.la/Paragraph" itemscope="">
        <span>And a code chunk that uses all three variables:</span>
      </p>
      <stencila-code-chunk
        itemtype="http://schema.stenci.la/CodeChunk"
        itemscope=""
        id="cc-4"
        programming-language="calc"
        compile-digest="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.0.0"
        execute-digest="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.0.0"
        execute-required="No"
        execute-status="Succeeded"
        execute-ended="2022-01-18T18:33:07.867498+00:00"
        execute-duration="0.00019"
        ><meta itemprop="programmingLanguage" content="calc" /><meta
          itemprop="compileDigest"
          content="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.0.0" /><meta
          itemprop="executeDigest"
          content="gb5HoVcTF46uTQDbkikofGxBKPtBmF74X8w0Z-S9gzk.M6AC6G3o9zXmDvh2_Zw0SZXwdm8ihrO9A1kRbEFlwm0.iHdGgGRifAVlA4p5T25ajwR0rVMlpiXFyHZsuVjyfQs.0.0" /><meta
          itemprop="executeRequired"
          content="No" /><meta
          itemprop="executeStatus"
          content="Succeeded" /><meta
          itemprop="executeEnded"
          content="2022-01-18T18:33:07.867498+00:00" /><meta
          itemprop="executeDuration"
          content="0.00019" />
        <pre data-itemprop="text" slot="text">a + b + c</pre>
        <stencila-code-dependencies
          data-itemprop="codeDependencies"
          slot="code-dependencies"
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-1"
            programming-language="calc"
            execute-auto="Always"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="CodeChunk"
            node-id="cc-3"
            programming-language="calc"
            execute-auto="Never"
            execute-required="No"
            execute-status="Succeeded"
          ></stencila-code-dependency
          ><stencila-code-dependency
            node-kind="Parameter"
            node-id="pa-1"
            label="c"
            execute-auto="Needed"
          ></stencila-code-dependency></stencila-code-dependencies
        ><stencila-code-dependencies
          data-itemprop="codeDependents"
          slot="code-dependents"
        ></stencila-code-dependencies>
        <div data-itemprop="outputs" slot="outputs">
          <span itemtype="http://schema.stenci.la/Number" itemscope="">4</span>
        </div>
        <div data-itemprop="errors" slot="errors"></div>
        <span data-itemprop="label" slot="label"></span>
        <figcaption data-itemprop="caption" slot="caption"></figcaption
      ></stencila-code-chunk>
    </div>
  </article>
`
