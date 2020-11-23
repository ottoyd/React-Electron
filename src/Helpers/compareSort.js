module.exports = function compare( a, b ) {
  if ( a.TotalConfirmed < b.TotalConfirmed ){
    return 1;
  }
  if ( a.TotalConfirmed > b.TotalConfirmed ){
    return -1;
  }
  return 0;
}