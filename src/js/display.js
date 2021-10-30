const scene = new THREE.Scene();

            const renderer = new THREE.WebGLRenderer({ canvas: canvas});
            var width = canvas.width;
            var height = canvas.height

            const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );

            renderer.setSize( width, height );
            document.body.appendChild( renderer.domElement );
            
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;

            const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.00;
				cube.rotation.y += 0.00;

				renderer.render( scene, camera );
			};

			animate();