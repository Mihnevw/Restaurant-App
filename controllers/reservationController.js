import Reservation from "../model/Reservation.js";

export const saveReservation = async (req, res) => {
  try {
    const { email, name, people, specialRequest, dateTime } = req.body;

    // Проверка дали всички задължителни полета са попълнени
    if (!name?.trim() || !email?.trim() || !people?.trim() || !specialRequest?.trim() || !dateTime?.trim()) {
      return res.status(400).json({
        error: "Name, email, people, specialRequest and datetime are required"
      });
    }

    // Преобразуване на people в число
    const peopleCount = parseInt(people.trim(), 10);
    
    if (isNaN(peopleCount)) {
      return res.status(400).json({
        error: "People must be a valid number"
      });
    }

    const newReservation = new Reservation({
      email: email.trim(),
      name: name.trim(),
      people: peopleCount, // използвайте числовата стойност
      specialRequest: specialRequest.trim(),
      dateTime: new Date(dateTime.trim()) // уверете се, че датата е валидна
    });

    await newReservation.save();
    
    return res.status(201).json({
      success: true,
      message: "Reservation saved successfully"
    });
  } catch (err) {
    console.error("Database Error:", err);
    return res.status(500).json({
      error: "Грешка при запис в базата",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};
