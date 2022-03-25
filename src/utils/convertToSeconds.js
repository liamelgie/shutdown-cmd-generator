export const convertToSeconds = (convertFrom, valueToParse) => {
    // Convert provided value to seconds
    switch(convertFrom) {
      case 'SECONDS':
        return valueToParse;
      case 'MINUTES':
        return valueToParse * 60
      case 'HOURS':
        return (valueToParse * 60) * 60
      case 'DAYS':
        return ((valueToParse * 24) * 60) * 60
      default:
        return 0
    }
}