


if (document.querySelector('#flightSVG')) {
	if (document.documentElement.clientWidth > 1024) {
		gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

		gsap.set("#flightSVG", { scale: 1, autoAlpha: 1 });
		gsap.set("#plane", { transformOrigin: "50% 50%" });
		let rotateTo = gsap.quickTo("#plane", "rotation"),
			prevDirection = 0;

		gsap.to("#flightSVG", {
			scrollTrigger: {
				trigger: "#flightPath",
				start: "top center",
				end: () => "+=" + document.querySelector("#flightPath").getBoundingClientRect().height,
				scrub: 2.5,
				// markers: true,
				onUpdate: self => {
					if (prevDirection !== self.direction) {
						rotateTo(self.direction === 1 ? 0 : -180);
						prevDirection = self.direction;
					}
				}
			},
			ease: pathEase("#flightPath"),
			immediateRender: true,
			motionPath: {
				path: "#flightPath",
				align: "#flightPath",
				alignOrigin: [0.5, 0.5],
				autoRotate: -190,
			}
		});

		function pathEase(path, config = {}) {
			let axis = config.axis || "y",
				precision = config.precision || 1,
				rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
				useX = axis === "x",
				start = rawPath[0][useX ? 0 : 1],
				end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)],
				range = end - start,
				l = Math.round(precision * 100),
				inc = 1 / l,
				positions = [0],
				a = [],
				minIndex = 0,
				smooth = [0],
				minChange = (1 / l) * 0.6,
				smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
				fullSmoothRange = smoothRange * 2,
				getClosest = p => {
					while (positions[minIndex] <= p && minIndex++ < l) { }
					a.push((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
					smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
				},
				i = 1;
			for (; i < l; i++) {
				positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
			}
			positions[l] = 1;
			for (i = 0; i < l; i++) {
				getClosest(i / l);
			}
			a.push(1); // 
			if (smoothRange) {
				smooth.push(l - fullSmoothRange + 1);
				smooth.forEach(i => {
					let start = a[i],
						j = Math.min(i + fullSmoothRange, l),
						inc = (a[j] - start) / (j - i),
						c = 1;
					i++;
					for (; i < j; i++) {
						a[i] = start + inc * c++;
					}
				});
			}
			return p => {
				let i = p * l,
					s = a[i | 0];
				return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
			}
		}
	}

}
