// import { Point, Path}
//
export class Wave {}
//
//     width: number;
//     height: number;
//     center: obj;
//     points: number  = 10;
//     smooth: boolean  = true;
//     path = new Path();
//     pathHeight: number  = 10;
//
//     initializePath(fillColor) {
//         this.path.fillColor = fillColor;
//     	this.center = view.center;
//     	this.width = view.size.width;
//     	this.height = 100;
//     	this.path.segments = [];
//     	this.path.add(view.bounds.bottomLeft);
//     	for (var i = 1; i < this.points; i++) {
//     		var point = new Point(this.width / this.points * i, this.center.y);
//     		this.path.add(point);
//     	}
//     	this.path.add(view.bounds.bottomRight);
//     	this.path.fullySelected = true;
//     }
//
//     onFrame(event) {
//     	this.pathHeight += (this.center.y - this.pathHeight) / 10;
//     	for (var i = 1; i < this.points; i++) {
//     		var sinSeed = event.count + (i + i % 10) * 100;
//     		var sinHeight = Math.sin(sinSeed / 200) * this.pathHeight;
//     		var yPos = Math.sin(sinSeed / 100) * sinHeight + this.height;
//     		this.path.segments[i].point.y = yPos;
//     	}
//     	if (this.smooth)
//     		this.path.smooth({ type: 'continuous' });
//     }
//
//     onResize(event) {
//     	this.initializePath('black');
//     }
// }
