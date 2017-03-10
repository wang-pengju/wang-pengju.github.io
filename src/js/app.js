angular.module('myApp', ['ngResource', 'ngAnimate'])
	.directive('myContent', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			templateUrl: function() {
				return "content.html";
			}
		};
	})
	.controller('myCtrl', ['$scope', '$resource', function($scope, $resource) {
		var objRe = $resource("data.json");
		$scope.user = {
			name: "张小六",
			userId: "123"
		};
		/*console.log(objRe.get());*/
		objRe.get(function(result) {
			/*console.log(result);*/
			$scope.list = result.data;
			/*console.log($scope.list);*/

		});
		$scope.myEvent = function(index) {
			if (!$scope.list[index].hasLoveClicked) {
				$scope.list[index].hasLoveClicked = true;
				$scope.list[index].loveCount++;
			} else {
				$scope.list[index].loveCount--;
				$scope.list[index].hasLoveClicked = false;
			}

		};


		$scope.retractOrUnfold = function(index) {
			if (!$scope.list[index].hasClicked) {
				$scope.list[index].hasClicked = true;
				$scope.list[index].retractContent = "收起";
			} else {
				$scope.list[index].hasClicked = false;
				$scope.list[index].retractContent = "展开";

			}
		};

	}])
	.filter('formatDate', function() {
		return function(value) {
			var date = new Date(value);
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var nowDate = (new Date()).getTime();
			var timeInterval = (nowDate - value) / 3600000;
			if (timeInterval >= 24) {
				return year + "-" + month + "-" + day;
			} else {
				if (timeInterval < 1) {
					return parseInt((timeInterval) * 60) + '分钟前';
				} else {
					return Math.round(timeInterval) + '小时前';
				}
			}

		};
	})
	.animation('.commentTest', function() {
		return {
			addClass: function(element, SClass, done) {
				//console.log(element);
				//console.log(SClass);
				//console.log(done);
				$(element).animate({
					opacity: 0
				}, 200, done);
			},
			removeClass: function(element, SClass, done) {
				$(element).animate({
					opacity: 1
				}, 200, done);
			}
		};

	});