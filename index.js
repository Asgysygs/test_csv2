import _ from 'lodash';

export default function solution(content){
  let counerTrue = 0
  let counerFalse = 0
  let mas = []
  let counterWhite = 0
  let counterBlack = 0
  let counterDraw = 0
  // BEGIN
  const splitContent = content.split('\n').slice(1,-1)
  console.log(splitContent.length)
  splitContent.map((elen)=>{
    elen = elen.split(',')
    if(elen[1] ==='FALSE') counerFalse++
    if(elen[1] ==='TRUE') counerTrue++
    mas.push(elen[13])
    if(elen[4] ==='White')counterWhite++
    if(elen[4] ==='Draw')counterDraw++
    if(elen[4] ==='Black')counterBlack++
  })
  console.log((`Соотношение рейтинговыз и не рейтинговых ${Math.round(counerTrue / counerFalse)}`))
  console.log(_.uniq(mas).join(' and'))
  console.log('Победа Черных в процентах = '+(((counterBlack/splitContent.length))*100),'\nПобед Белых в процентах = '+(counterWhite/splitContent.length)*100,'\nКоличество Ничьей в процентах = '+(counterDraw/splitContent.length)*100)

  // END
}