import { PolicyData } from './policy';
import Fuse from 'fuse.js';

export const policySearch = (keyword) => {
  const options = {
    shouldSort: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name",
      "keywords"
    ]
  };
  let fuse = new Fuse(PolicyData, options);
  const results = fuse.search(keyword);
  return results;
}