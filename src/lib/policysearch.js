import { PolicyData } from './policy';
import Fuse from 'fuse.js';

export const policySearch = (keyword) => {
  const options = {
    shouldSort: true,
    findAllMatches: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      'keywords',
      'name',
      'category'
    ]
  };

  const fuse = new Fuse(PolicyData, options);
  let finalResults = []
  let searchInputList = keyword.split(',').map(item => item.trim());

  searchInputList.forEach((keyword) => {
    const results = fuse.search(keyword);
    finalResults = [...new Set(finalResults.concat(results))]; 
  })

  return finalResults;
}

export const policyCounter = () => {
  return PolicyData.length
}