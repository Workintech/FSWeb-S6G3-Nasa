export default function PhotoOfDay(props) {
  const { photoOfDay } = props;
  // destructuring yöntemini (ayrıştırma) kullandık. Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.
  // photoOfDay objesindeki photoOfDay props'unu çekmek istedik. yani props diye bir objenin içerisinden photoOfDay props'unu çek dedik.

  if (!photoOfDay) {
    return <p>Loading...</p>;
  } 

  return (
    <div>
      {photoOfDay && (
        <>
          <h2>{photoOfDay.title}</h2>
          <img src={photoOfDay.url} alt={photoOfDay.title} />
          <p>{photoOfDay.explanation}</p>
        </>
      )} 
      {/* ilk değere null dediğimiz için hata veriyordu, null içinden title'ı okuyamıyordu. bunu conditional rendering'le çözdük (&& ile). photoOfDay null'sa boş tag içerisini gösterme, ama içinde data varsa ekrana bastır dedik. şöyle de çözebilirdik: photoOfDay'in yanına soru işareti koyarak (optional chaning) --> obj.first?.second  */}
    </div>
  );
}
