// Holiday schedule function
function holidaySchedule(dateInput) {
    // Array with the holiday events between 12/21/2024 and 1/7/2025
    const events = {
        "12/21/2024": "on Saturday Dec. 21, I'm going to chill.",
        "12/22/2024": "on Sunday Dec. 22, I'm baking cookies.",
        "12/23/2024": "on Monday Dec. 23, I'm doing some last-minute shopping.",
        "12/24/2024": "on Tuesday Dec. 24, I'm having a Christmas Eve dinner.",
        "12/25/2024": "on Wednesday Dec. 25, I'm celebrating Christmas.",
        "12/26/2024": "on Thursday Dec. 26, I'm relaxing with family.",
        "12/31/2024": "on Tuesday Dec. 31, I'm going to a New Year's party.",
        "1/1/2025": "on Wednesday Jan. 1, I'm celebrating New Year's Day.",
        "1/2/2025": "on Thursday Jan. 2, I'm starting a new hobby.",
        "1/7/2025": "on Monday Jan. 7, I'm returning back to school."
    };

    // Check if the input date has an event scheduled
    if (events[dateInput]) {
        return events[dateInput];
    } else {
        return "nothing is planned for this day.";
    }
}

// Test the function with a few examples
console.log(holidaySchedule("12/21/2024")); // Expected: on Saturday Dec. 21, I'm going to chill.
console.log(holidaySchedule("12/31/2024")); // Expected: on Tuesday Dec. 31, I'm going to a New Year's party.
console.log(holidaySchedule("1/7/2025")); // Expected: on Monday Jan. 7, I'm returning back to school.
console.log(holidaySchedule("12/30/2024")); // Expected: nothing is planned for this day.
