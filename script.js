function updateCalendar() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
  
    var calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
  
    var date = new Date(year, month - 1, 1);
    var daysInMonth = new Date(year, month, 0).getDate();
    var startDay = date.getDay();
  
    for (var i = 0; i < startDay; i++) {
      var emptyCell = document.createElement("div");
      emptyCell.className = "calendar-cell empty";
      calendar.appendChild(emptyCell);
    }
  
    for (var day = 1; day <= daysInMonth; day++) {
      var calendarCell = document.createElement("div");
      calendarCell.className = "calendar-cell";
  
      var imageLink = document.createElement("a");
      imageLink.href = "#"; // Replace "#" with your desired link
      var image = document.createElement("img");
      image.src = "/photos/collective.jpg" // Replace "image.jpg" with your image URL
      image.alt = "Image";
      calendarCell.textContent = day;
      imageLink.appendChild(image);
      calendarCell.appendChild(imageLink);
  
      var caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = "Caption";
      calendarCell.appendChild(caption);
  
      calendar.appendChild(calendarCell);
    }
  }
  
  // Set current month and year when the page is loaded
  window.onload = function() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
  
    document.getElementById("year").value = currentYear;
    document.getElementById("month").value = currentMonth;
  
    updateCalendar();
  };
  