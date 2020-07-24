


import {rand} from '../../_common/js/common.js'


function a_(list, x){
	const tl = new TimelineMax()
	
	list.map((item, index)=>{
		tl.from(item, (index*.1)+.2,  { x, y:`+=${rand(-80, 80)}`, ease:Power3.easeOut}, 0.3)
		
	})
}


function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	

	tl.set(".frame1", {opacity:1})

	TweenLite.from(".a_0", .8,  {x:-100, opacity:0})
	TweenLite.from(".b_0", .8,  {x:+100, opacity:0})
	
	const a = [		
		".a_1",
		".a_2",
		".a_3",
		".a_4",
		".a_5",
		
	]


	const b = [				
		".b_1",
		".b_2",
		".b_3",
		".b_4",
		".b_5",
		".b_6",
		".b_7",
		".b_8",
	]
	a_(a, -200)
	a_(b, 200)




	tl.from(".t1_a", .01, {opacity:0}, .1)
	tl.from(".t1_b", .01, {opacity:0}, "+=.5")
	tl.from(".t1_c", .01, {opacity:0}, "+=.5")
	tl.from([".t1_d", ".logo"], .01, {opacity:0}, "+=.8")
	
	// tl.from(".t1_c", .01, {opacity:0}, "+=.3")
	

	// tl.from(".hero_a", .6, {opacity:.8}, 0)

	tl.add("f2", 4)
	tl.to(".frame1", .3, {opacity:0}, "f2")
	tl.set(".frame2", {opacity:1}, "f2")

	tl.add("phone_move")
	tl.from('.phone', .3, {y:"+=500", ease:Power3.easeOut}, "phone_move")
	tl.from('.illust', .3, {scale:0}, "phone_move+=.3")

	tl.from(['.t2', '.legal'], .01, {opacity:0}, "+=.3")
	tl.from('.cta', .1, {opacity:0}, "+=1.4")
	tl.to('.cta', .2, {opacity:0}, "+=2.3")
	tl.from('.cta2', .3, {opacity:0})
	

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

start()

module.exports = {};
