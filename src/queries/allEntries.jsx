const query = `
query nzentryCollectionQuery {
  nzentryCollection {
    items {
      sys {
        id
      }
      title
      date
      coordinates {
        lat
        lon
      }
      description
      imagesCollection {
        total
        items {
          url
          title
          description
        }
      }
    }
  }
}
`;

export default query;
