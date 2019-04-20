'use strict';
//引入gulp包依赖
var gulp = require('gulp');
//引入gulp-sass依赖
var sass = require('gulp-sass');
//创建一个gulp的任务：sass
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
    console.log('sass is running...');
  return gulp.src('./assets/scss/**/*.scss')//让gulp去拿到原始文件
  //把sass原始文件交给gulp-sass做编译转换成css
    .pipe(sass({outputStyle:'expanded'}).on('error', function(){
        console.log("sass is error...")
    }))
    .pipe(gulp.dest('./assets/css/'));
});
//创建gulp监听任务：watch
gulp.task('sass:watch', function () {
    // console.log('watch is running...');
    gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
});

//gulp的默认任务
gulp.task('default',gulp.series(['sass:watch']))