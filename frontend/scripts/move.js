
function handleKeyDown(event) {
    switch (event.code) {
        case 'ArrowLeft':
            console.log('Move block left');
            break;
        case 'ArrowRight':
            console.log('Move block right');
            break;
        case 'ArrowUp':
            console.log('Rotate clockwise');
            break;
        case 'ArrowDown':
            console.log('Soft drop');
            break;
        case 'Space':
            console.log('Hard drop');
            break;
        case 'KeyC':
            console.log('Hold piece');
            break;
        case 'KeyZ':
            console.log('Rotate anti-clockwise');
            break;
        default:
       
            break;
    }
}


document.addEventListener('keydown', handleKeyDown);
