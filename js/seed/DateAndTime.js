           const timeColors = [
                // Deep Night (12AM - 4AM)
                { period: "AM", start: 0, end: 4, label: "Deep Night", gradient: "linear-gradient(to bottom, #0D1B2A, #1B263B)" },

                // Sunrise (5AM - 6AM)
                { period: "AM", start: 5, end: 6, label: "Sunrise", gradient: "linear-gradient(to bottom, #F6D365, #FDA085)" },

                // Morning Sky (7AM - 11AM)
                { period: "AM", start: 7, end: 11, label: "Morning", gradient: "linear-gradient(to bottom, #87CEFA, #E0F7FA)" },

                // Noon (12PM)
                { period: "PM", start: 12, end: 12, label: "Noon", gradient: "linear-gradient(to bottom, #B3E5FC, #FFFFFF)" },

                // Afternoon (1PM - 3PM)
                { period: "PM", start: 13, end: 15, label: "Afternoon", gradient: "linear-gradient(to bottom, #90CAF9, #FFFDE7)" },

                // Sunset (4PM - 6PM)
                { period: "PM", start: 16, end: 18, label: "Sunset", gradient: "linear-gradient(to bottom, #FF7E5F, #FEB47B)" },

                // Evening (7PM - 8PM)
                { period: "PM", start: 19, end: 20, label: "Evening", gradient: "linear-gradient(to bottom, #3F51B5, #1A237E)" },

                // Nightfall (9PM - 11PM)
                { period: "PM", start: 21, end: 23, label: "Night", gradient: "linear-gradient(to bottom, #0D1B2A, #1B263B)" }
            ];

            function fetchPhilippineTime() {
                // Use browser's built-in timezone conversion for Philippine time
                const now = new Date();
                const philippineTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Manila"}));
                
                const convertedData = {
                    year: philippineTime.getFullYear(),
                    month: philippineTime.getMonth() + 1,
                    day: philippineTime.getDate(),
                    hour: philippineTime.getHours(),
                    minute: philippineTime.getMinutes(),
                    seconds: philippineTime.getSeconds()
                };
                
                // Store data globally for other scripts to use
                window.currentTimeData = {
                    data: convertedData,
                    timestamp: Date.now()
                };
                
                updateDateTimeDisplay(convertedData);
            }

            function updateDateTimeDisplay(data) {
                const dateElement = document.getElementById("getCurrentDate");
                const circle = document.getElementById("circle");
                
                if (!circle) return;

                // Extract fields
                var year = data.year;
                var month = String(data.month).padStart(2, '0');
                var day = String(data.day).padStart(2, '0');
                var hour = data.hour;
                var minutes = String(data.minute).padStart(2, '0');
                var seconds = String(data.seconds).padStart(2, '0');

                // Edit date and time for debugging (uncomment to test)
                // year = 2099;
                // month = "12";
                //day = "19";
                //hour = 23; // Make sure this is a number
                // minutes = "30";
                // seconds = "00";

                var ampm = hour >= 12 ? "PM" : "AM";
                var hour12 = hour % 12 || 12;
                var hour12Str = hour12 < 10 ? "0" + hour12 : hour12;

                const timeInfo = getTimeColorInfo(hour);
                circle.style.backgroundImage = timeInfo.gradient;
                //circle.innerText = `${hour12Str}:${minutes}:${seconds} ${ampm}`;

                //var customDate = `${year}/${month}/${day}`;
                //var customTime = `${hour12Str}:${minutes}:${seconds} ${ampm}`;
                //if (dateElement) {
                //    dateElement.innerHTML = `Current Date: ${customDate} | Current Time: ${customTime}`;
                //}
            }

            function getTimeColorInfo(hour24) {
                for (const range of timeColors) {
                    if (hour24 >= range.start && hour24 <= range.end) {
                        return { 
                            gradient: range.gradient
                        };
                    }
                }

                // Default fallback
                return {
                    gradient: "linear-gradient(to bottom, #3498db, #2980b9)"
                };
            }

            // Initial fetch
            fetchPhilippineTime();
            
            // Run every second
            setInterval(fetchPhilippineTime, 1000);