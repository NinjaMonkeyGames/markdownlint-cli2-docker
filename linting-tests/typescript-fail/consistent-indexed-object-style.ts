interface IndexSignatureInterface {
    [key: string]: unknown;
  }
  
  type IndexSignatureType = {
    [key: string]: unknown;
  };
  
  type MappedType = {
    [key in string]: unknown;
  };