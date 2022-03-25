export const constructCommand = (timeToTrigger, powerStateChange) => {
    // Convert desired powerstate change to it's respective flag
    let powerStateFlag = '';
    switch(powerStateChange) {
      case 'SHUTDOWN':
        powerStateFlag = '-s'
        break;
      case 'RESTART':
        powerStateFlag = '-r';
        break;
      default:
        powerStateFlag = '-s';
        break;
    }
  
    return `shutdown ${powerStateFlag} -t ${timeToTrigger}`
  }