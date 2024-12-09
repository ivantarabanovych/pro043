import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

const paths = {
  images: {
    src: './images/**/*.{jpg,jpeg,png,svg,gif}', 
    dest: 'dist/images/' 
  }
};

export function optimizeImages() {
  return gulp
    .src(paths.images.src) 
    .pipe(imagemin()) 
    .pipe(gulp.dest(paths.images.dest)); 
}

export default gulp.series(optimizeImages);
