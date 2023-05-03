export interface Location {
    label: string
    value: Value
  }
  
  export interface Value {
    description: string
    matched_substrings: MatchedSubstring[]
    place_id: string
    reference: string
    structured_formatting: StructuredFormatting
    terms: Term[]
    types: string[]
  }
  
  export interface MatchedSubstring {
    length: number
    offset: number
  }
  
  export interface StructuredFormatting {
    main_text: string
    main_text_matched_substrings: MainTextMatchedSubstring[]
    secondary_text: string
  }
  
  export interface MainTextMatchedSubstring {
    length: number
    offset: number
  }
  
  export interface Term {
    offset: number
    value: string
  }

  export interface DistanceMatrix {
    destination_addresses: string[]
    origin_addresses: string[]
    rows: Row[]
    status: string
  }
  
  export interface Row {
    elements: Element[]
  }
  
  export interface Element {
    distance: Distance
    duration: Duration
    status: string
  }
  
  export interface Distance {
    text: string
    value: number
  }
  
  export interface Duration {
    text: string
    value: number
  }
  