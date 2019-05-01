// 获得页面高度
export const get_height = ()=> {
   let height = 'min-height:' + window.screen.height + 'px';
   return height
}
// 获得大写钱
export const get_big_money = (num)=> {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num))
    return "数据非法";
  let unit = "千百拾亿千百拾万千百拾元角分", str = "";
  num += "00";
  let p = num.indexOf('.');
  if (p >= 0)
    num = num.substring(0, p) + num.substr(p+1, 2);
  unit = unit.substr(unit.length - num.length);
  for (let i=0; i < num.length; i++)
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i);
  return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
// 获得时间 2019-03-16 12:00
export const get_date = (data_time)=> {
  let year = data_time.getFullYear();
  let month = (data_time.getMonth()+1) <= 9 ? '0'+  (data_time.getMonth()+1) :  data_time.getMonth()+1;
  let day = data_time.getDate() <= 9 ? '0'+data_time.getDate() : data_time.getDate();
  let hour = data_time.getHours() <=9 ? '0'+data_time.getHours() :data_time.getHours();
  let min = data_time.getMinutes() <= 9 ? '0'+ data_time.getMinutes() : data_time.getMinutes();
  // let second = data_time.getSeconds() <= 9 ? '0' +  data_time.getSeconds() : data_time.getSeconds();
  let time = year +'-'+month+'-'+day+' '+hour+':'+min;
  return time
}
// 获得时间 2019-03-16
export const get_date2 = (data_time)=> {
  let year = data_time.getFullYear();
  let month = (data_time.getMonth()+1) <= 9 ? '0'+  (data_time.getMonth()+1) :  data_time.getMonth()+1;
  let day = data_time.getDate() <= 9 ? '0'+data_time.getDate() : data_time.getDate();
  // let hour = data_time.getHours() <=9 ? '0'+data_time.getHours() :data_time.getHours();
  // let min = data_time.getMinutes() <= 9 ? '0'+ data_time.getMinutes() : data_time.getMinutes();
  // let second = data_time.getSeconds() <= 9 ? '0' +  data_time.getSeconds() : data_time.getSeconds();
  let time = year +'-'+month+'-'+day;
  return time
}
// 获得时间 2019.03.16 19:16
export const get_date3 = (data_time)=> {
  let year = data_time.getFullYear();
  let month = (data_time.getMonth()+1) <= 9 ? '0'+  (data_time.getMonth()+1) :  data_time.getMonth()+1;
  let day = data_time.getDate() <= 9 ? '0'+data_time.getDate() : data_time.getDate();
  let hour = data_time.getHours() <=9 ? '0'+data_time.getHours() :data_time.getHours();
  let min = data_time.getMinutes() <= 9 ? '0'+ data_time.getMinutes() : data_time.getMinutes();
  // let second = data_time.getSeconds() <= 9 ? '0' +  data_time.getSeconds() : data_time.getSeconds();
  let time = year +'.'+month+'.'+day+' '+hour+':'+min;
  return time
}
// 计算图片大小
export const get_img_size = (size)=> {
  if(size<1024){
    return size+'B'
  }
  else if(size>=1024 && size<1024*1024){
    return parseFloat(size/1024).toFixed(2)+'KB'
  }
  else if(size>=1024*1024 && size<1024*1024*1024){
    return parseFloat(size/(1024*1024)).toFixed(2)+'MB'
  }
  else if(size>=1024*1024*1024 && size<1024*1024*1024*1024){
    return parseFloat(size/(1024*1024*1024)).toFixed(2)+'GB'
  }
  else if(size>=1024*1024*1024*1024 && size<1024*1024*1024*1024*1024){
    return parseFloat(size/(1024*1024*1024*1024)).toFixed(2)+'TB'
  }
  else{
    return '图片太大'
  }
}
// 深拷贝
export const deepClone = (item)=>{
  let item2 = JSON.stringify(item);
  let itemClone = JSON.parse(item2);
  return itemClone
}
