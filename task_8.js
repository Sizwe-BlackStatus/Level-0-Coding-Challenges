function timeConversion(number) {
  let hour = number / 60;
  let minutes = Math.round((hour - Math.trunc(hour)) * 60);
  if (hour > 0) {
    hour = Math.trunc(hour);
  }
  if(hour > 1 && minutes > 1){
      return `${hour} hours, ${minutes} minutes.`
  }
  else if(hour > 1 && minutes === 1){
      return `${hour} hours, ${minutes} minute.`
  }
  else if(hour === 1 && minutes > 1){
      return `${hour} hour, ${minutes} minutes.`
  }
  else if(minutes > 1){
      return `${minutes} minutes.`
  }
  else if(minutes === 1){
      return `${minutes} minute.`
  }
  else if(hour > 1){
      return `${hour} hours.`
  }
  else if(hour === 1){
      return `${hour} hour.`
  }
}
