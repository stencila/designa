/**
 * A resource in a dependency graph (the nodes of the graph)
 */

export type SymbolResource = {
  type: 'Symbol'
  /**
   * The path of the file that the symbol is defined in
   */
  path: string
  /**
   * The name/identifier of the symbol
   */
  name: string
  /**
   * The type of the object that the symbol refers to (e.g `Number`, `Function`)
   *
   * Should be used as a hint only, and as such is excluded from equality and hash functions.
   */
  kind: string
}

export type NodeResource = {
  type: 'Node'
  /**
   * The path of the file that the node is defined in
   */
  path: string
  /**
   * The id of the node with the document
   */
  id: string
  /**
   * The type of node e.g. `Parameter`, `CodeChunk`
   */
  kind: string
}

export type FileResource = {
  type: 'File'
  /**
   * The path of the file
   */
  path: string
}

export type Resource =
  | SymbolResource
  | NodeResource
  | FileResource
  | {
      type: 'Source'
      /**
       * The name of the project source
       */
      name: string
    }
  | {
      type: 'Module'
      /**
       * The programming language of the module
       */
      language: string
      /**
       * The name of the module
       */
      name: string
    }
  | {
      type: 'Url'
      /**
       * The URL of the external resource
       */
      url: string
    }

/**
 * The relation between two resources in a dependency graph (the edges of the graph)
 *
 * Some relations carry additional information such whether the relation is active (`Import` and `Convert`) or the range that they occur in code (`Assign`, `Use`, `Read`) etc
 */
export type Relation =
  | {
      type: 'Assign'
      /**
       * The range within code that the assignment is done
       */
      range: [number, number, number, number]
    }
  | {
      type: 'Convert'
      /**
       * Whether or not the conversion is automatically updated
       */
      auto: boolean
    }
  | {
      type: 'Embed'
      [k: string]: unknown
    }
  | {
      type: 'Import'
      /**
       * Whether or not the import is automatically updated
       */
      auto: boolean
    }
  | {
      type: 'Include'
      [k: string]: unknown
    }
  | {
      type: 'Link'
      [k: string]: unknown
    }
  | {
      type: 'Read'
      /**
       * The range within code that the read is declared
       */
      range: [number, number, number, number]
    }
  | {
      type: 'Use'
      /**
       * The range within code that the use is declared
       */
      range: [number, number, number, number]
    }
  | {
      type: 'Write'
      /**
       * The range within code that the write is declared
       */
      range: [number, number, number, number]
    }

/**
 * A subject-relation-object triple
 */
export type Triple = [Resource, Relation, Resource]

export type GraphNode = Resource & { index: number }
export type GraphEdge = { from: number; to: number; relation: Relation }

/**
 * A project dependency graph
 */
export interface Graph {
  /**
   * The resources in the graph
   */
  nodes: GraphNode[]
  /**
   * The relations between resources in the graph
   */
  edges: GraphEdge[]
}
