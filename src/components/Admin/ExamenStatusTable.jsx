import React from "react";


//Los exámenes tendrán 2 estados: pendiente y realizado
const mockExams = [
    { examName: "Desarrollo de Software II", teacher: "Ing. Juan Fajardo", students: 25, status: "Pendiente" },
    { examName: "Testing I", teacher: "Ing. Javier Enciso", students: 20, status: "Realizado" },
  ];

 const ExamenStatusTable = () => {
    return (
        <div className="bg-gray-800 p-4 rounded">
        <h2 className="text-xl mb-4 text-white">Exam Status</h2>
        <table className="min-w-full bg-gray-700 text-white">
          <thead>
            <tr>
              <th className="py-2">Exam</th>
              <th className="py-2">Teacher</th>
              <th className="py-2">Students</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockExams.map((exam, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2">{exam.examName}</td>
                <td className="py-2">{exam.teacher}</td>
                <td className="py-2">{exam.students}</td>
                <td className="py-2">{exam.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
};

 export default ExamenStatusTable;