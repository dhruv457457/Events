 // for online offline status

            const onlineStatusDiv = document.getElementById('state');
            const onlineDiv = document.getElementById('online');
            const offlineDiv = document.getElementById('offline');
            let isOnline = navigator.onLine;
            let wasOnline = isOnline;
            const displayDuration = 3000; // in milliseconds (3 seconds)

            function showOnlineMessage() {
                onlineDiv.classList.remove('hide');
                setTimeout(() => {
                    onlineDiv.classList.add('hide');
                }, displayDuration);
            }

            function updateOnlineStatus(event) {
                isOnline = navigator.onLine;

                if (isOnline && !wasOnline) {
                    showOnlineMessage();
                }

                if (!isOnline) {
                    offlineDiv.classList.remove('hide');
                } else {
                    offlineDiv.classList.add('hide');
                }

                wasOnline = isOnline;
            }

            window.addEventListener('online', updateOnlineStatus);
            window.addEventListener('offline', updateOnlineStatus);

            updateOnlineStatus(); // Initial check

