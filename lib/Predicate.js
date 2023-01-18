import TermMap from '@rdfjs/term-map'
import * as ns from './namespaces.js'

class Predicate {
  constructor ({ objects, quads, term }) {
    this.isType = ns.rdf.type.equals(term)
    this.objects = new TermMap(objects)
    this.quads = quads
    this.term = term
  }
}

export default Predicate
