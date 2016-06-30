/**
 * Created by Administrator on 2016/6/29.
 */
var gulp=require("gulp")
var connect=require("gulp-connect")
var less=require("gulp-less")
var minify=require("gulp-minify-css")
var imagemin=require("gulp-imagemin")


gulp.task("copy",function(){
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload())
})


//gulp.task("data",function(){
//    return gulp.src(["src/json/*.json","src/xml/*"])
//        .pipe(gulp.dest("dist/data"))
//})

gulp.task("server",function(){
    connect.server({
        root:"dist",//根目录
        livereload:true
    })
})



gulp.task("less",function(){
    return gulp.src("src/css/style.less")
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})

gulp.task("img",function(){
    return gulp.src("src/imgs/*.{jpg,png}")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/imgs"))
})



gulp.task("watch",function(){
    gulp.watch(["src/index.html"],["copy"])
    gulp.watch(["src/css/style.less"],["less"])
})

gulp.task('default',["server","watch"])