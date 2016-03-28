(function(angular) {
  'use strict';

  // 解决重复的办法：递归
  function getId() {
    return Math.random();
  }

  // 创建一个模块
  var todoApp = angular.module('TodoApp', []);
  // {
  // 	input:string,
  // 	todos:array,
  // }
  // 定义一个主控制器
  todoApp.controller('MainController', ['$scope', function($scope) {

    // ===== 初始化数据成员 =====
    // 输入框
    $scope.input = '';

    // 当前正在编辑的任务ID
    $scope.currentEditingId = 0;

    // 任务列表，相当于一张表 考虑几个字段的问题
    $scope.todos = [
      { id: getId(), text: 'HTML', completed: true }, // 复合数据
      { id: getId(), text: 'CSS', completed: true },
      { id: getId(), text: 'JavaScript', completed: false }
    ];

    // 暴露行为

    // 新增任务
    $scope.add = function() {
      if (!$scope.input) return;

      $scope.todos.push({ id: getId(), text: $scope.input, completed: false });
      $scope.input = '';
    };

    // 删除任务
    $scope.remove = function(current) {
      var index = $scope.todos.indexOf(current);
      $scope.todos.splice(index, 1);
    };

    // 获取todos中有没有已经完成的元素
    $scope.hasCompleted = function() {
      var hasCompleted = false; // 没有
      // es5的遍历操作如何break
      // every 和 some 和 forEach 一样都可以遍历数组
      // every 要求每一个元素都满足条件
      // some 要求某个元素满足条件
      return $scope.todos.some(todo => todo.completed);
    };

    // 清空所有已经完成的
    $scope.clearCompleted = function() {
      // 不能再循环中移除或新增数组元素
      // $scope.todos.forEach(todo => {
      // 	if(todo.completed){
      // 		$scope.remove(todo);
      // 	}
      // });
      // 先找到所有没有完成的任务 装到一个新的数组中
      var unCompleteds = [];
      $scope.todos.forEach(todo => {
        if (!todo.completed) {
          unCompleteds.push(todo);
        }
      });
      $scope.todos = unCompleteds;
    };

    $scope.checkedAll = false;
    // 全部完成
    $scope.allCompleted = function() {
      $scope.todos.forEach(todo => { todo.completed = $scope.checkedAll; });
    };

    // 双击启用编辑
    $scope.edit = function(current) {
      $scope.currentEditingId = current.id;
    };

    // 回车保存
    $scope.save = function() {
      $scope.currentEditingId = 0;
    };

  }]);


})(angular);
