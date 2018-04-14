/**
 * Created by zhaojun on 2017/2/14.
 */



$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next',
      center: 'title',
      right: ''
    },
    //footer:true,
    //defaultDate: '2017-02-04',
    height:500,
    defaultView: 'agendaWeek',
    minTime: '6:00',
    maxTime: '24:00',

    //slotLabelFormat:"H(:mm):00",
    axisFormat: 'H(:mm):00',
    allDaySlot: false,
    selectable: true,
    editable: false,
    disableDragging: true,
    disableResizing: true,

    //Integer:1000,

    //设置读取html
    eventRender: function (event, element) {
      element.html(event.title);
    },


    //点击事件
    eventClick: function(calEvent, jsEvent, view) {
      console.log('Event: ' + calEvent.title);
      /*alert(calEvent.title);*/
      // window.location.href="http://192.168.1.250:8088/page/teacher-wxzs/classinfo.html"
    },
    //选择事件
    select: function (start, end) {
      // window.location.href="http://192.168.1.250:8088/page/teacher-wxzs/addclass.html"
      /*var showGeneralDom = document.querySelector('#calendar');
      /!*var suIdDom = document.querySelector('#suId');
       var weiIdDom = document.querySelector('#weiId');*!/

      var suId = showGeneralDom.dataset['su_id'];
      var suValue = showGeneralDom.dataset['su_value'];
      var weiId = showGeneralDom.dataset['wei_id'];
      var weiValue = showGeneralDom.dataset['wei_value'];
      var overId = showGeneralDom.dataset['over_id'];
      var overValue = showGeneralDom.dataset['over_value'];
      var suData = [
        {'id': '10001', 'value': '10:10'},
        {'id': '10002', 'value': '10:15'},
        {'id': '10003', 'value': '10:20'},
        {'id': '10004', 'value': '10:30'},
        {'id': '10005', 'value': '10:35'}
      ];
      var weiData = [
        {'id': '20001', 'value': '0.5'},
        {'id': '20002', 'value': '1'},
        {'id': '20003', 'value': '1.5'},
        {'id': '20004', 'value': '2'}
      ];
      var overData = [
        {'id': '30001', 'value': '10:40'}
      ];
      var sanguoSelect = new IosSelect(
        3,
        [suData, weiData,overData],
        {
          title: '选择开始时间和课时',
          itemHeight: 35,
          oneLevelId: suId,
          twoLevelId: weiId,
          threeLevelId: overId,
          callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
            /!* suIdDom.value = selectOneObj.id;
             weiIdDom.value = selectTwoObj.id;*!/
            //console.log('开始时间：' + selectOneObj.value + ' 课时：' + selectTwoObj.value,'结束时间：' + selectThreeObj.value);

            showGeneralDom.dataset['su_id'] = selectOneObj.id;
            showGeneralDom.dataset['su_value'] = selectOneObj.value;
            showGeneralDom.dataset['wei_id'] = selectTwoObj.id;
            showGeneralDom.dataset['wei_value'] = selectTwoObj.value;
            showGeneralDom.dataset['wei_id'] = selectTwoObj.id;
            showGeneralDom.dataset['wei_value'] = selectTwoObj.value;
            showGeneralDom.dataset['over_id'] = selectThreeObj.id;
            showGeneralDom.dataset['over_value'] = selectThreeObj.value;

            window.location.href="http://192.168.1.250:8088/page/teacher-wxzs/addclass.html"

          }
        });

      console.log(sanguoSelect.oneLevelId)*/

    },

    eventAfterAllRender:function(){
      timeclassheight();
    },


    //点击日期
    /*dayClick: function(date, jsEvent, view, resourceObj) {

     alert('Date: ' + date.format());
     //alert('Resource ID: ' + resourceObj.id);
     },*/

    //事件
    events: [
      {
        title: '<div class="classinfo" title="" ><p class="wellipsis">高晓思</p></div><span></span>',
        start: '2017-10-29T09:00:00',
        end: '2017-10-29T12:00:00',
        className: 't-kbbox  t-c-grey'
      },
      {
        title: '<div class="classinfo" title="" ><p class="wellipsis">高晓思思</p></div><span></span>',
        start: '2017-10-25T09:00:00',
        end: '2017-10-25T12:00:00',
        className: 't-kbbox t-c-grey'
      },
      {
        title: '<div class="classinfo" title="" ><p class="wellipsis">高晓思思</p></div><span></span>',
        start: '2017-10-28T09:00:00',
        end: '2017-10-28T12:00:00',
        className: 't-kbbox t-c-blue'
      },

      {
        title: '<div class="classinfo" title="" ><p class="wellipsis">高晓思思</p></div><span></span>',
        start: '2017-10-24T14:00:00',
        end: '2017-10-24T18:00:00',
        className: 't-kbbox  t-c-blue'
      }
    ]
  });



  function settodaytitle(){
    var today=new Date();
    var tdn=today.getDay();
    if (tdn==0){
      $('.fc-widget-header .fc-day-header').eq(6).addClass('on')
    }else {
      $('.fc-widget-header .fc-day-header').eq(tdn-1).addClass('on')
    }
  }
  settodaytitle();





  $('.fc-next-button,.fc-prev-button').click(function(){
    var flag=$('.fc-time-grid .fc-today').hasClass('fc-today');
    console.log(flag);
    if(flag){
    settodaytitle();
    }
  })



  function timeclassheight(){
    var fht_height=$('.fc-header-toolbar').height();
    var fwh_height=$('.fc-widget-header').height();
    var body_height=window.innerHeight;
    var con_height=body_height-fwh_height-fht_height-5;
    $('.fc-time-grid-container').height(con_height);
  }

  //setTimeout(timeclassheight,2000);
  //timeclassheight();





  $(window).resize(function(){
   //alert("ddd")
   timeclassheight();
   });



  $('.fc-prev-button ,.fc-next-button').click(function(){
    timeclassheight();
  });





















});
