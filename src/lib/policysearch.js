import { PolicyData } from './policy';
import Fuse from 'fuse.js';

export const policySearch = (keyword) => {
  const options = {
    shouldSort: true,
    findAllMatches: true,
    threshold: 0.1,
    location: 0,
    distance: 64,
    maxPatternLength: 32,
    minMatchCharLength: 5,
    keys: [
      "name",
      "keywords"
    ]
  };
  let fuse = new Fuse(PolicyData, options);
  const results = fuse.search(keyword);
  return results;
}