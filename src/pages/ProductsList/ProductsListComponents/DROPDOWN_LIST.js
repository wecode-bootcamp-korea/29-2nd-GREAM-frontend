const FILTER_LISTS = [
  {
    filterType: ['author', '작가'],
    idNameList: [
      { 1: 'Kathryn Rice' },
      { 2: 'Antonio Oneal' },
      { 3: 'Dalton Cuevas' },
      { 4: 'LindSay Martin' },
      { 5: 'Emily Clark' },
    ],
  },
  {
    filterType: ['theme', '테마'],
    idNameList: [
      { 1: '추상화' },
      { 2: '구상화' },
      { 3: '팝아트' },
      { 4: '입체주의' },
      { 5: '동양화' },
    ],
  },
  {
    filterType: ['year', '연도'],
    idNameList: [
      { '1970-01-01~1979-12-31': '1970년대' },
      { '1980-01-01~1989-12-31': '1980년대' },
      { '1990-01-01~1999-12-31': '1990년대' },
      { '2000-01-01~2030-12-31': '2000년대' },
    ],
  },
  {
    filterType: ['price', '가격'],
    idNameList: [
      { '0-100000': '10만원 이하' },
      { '100000-300000': '10만원 - 30만원 이하' },
      { '100000-500000': '30만원 - 50만원 이하' },
      { '500000-900000000000': '50만원 이상' },
    ],
  },
  {
    filterType: ['size', '사이즈'],
    idNameList: [{ 1: 'Small' }, { 2: 'Medium' }, { 3: 'Large' }],
  },
];

export default FILTER_LISTS;
