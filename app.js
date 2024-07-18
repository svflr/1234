window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const reg= await navigator.serviceWorker.register('serviceworker.js')
            console.log('Service worker register success', reg)
        } catch (e) {
            console.log('Service worker register fail')
        }

    }
})
