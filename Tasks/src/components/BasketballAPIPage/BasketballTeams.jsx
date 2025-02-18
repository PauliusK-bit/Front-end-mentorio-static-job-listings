import { useEffect, useState } from "react";

function BastketballTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch(
        "https://v1.basketball.api-sports.io/teams?league=12&season=2023",
        {
          method: "GET",
          headers: {
            "x-apisports-key": "fdf47b5c520ae3a1c5df57e7fff7406e",
            "x-rapidapi-host": "v1.basketball.api-sports.io",
          },
        }
      );

      const team = await res.json();
      console.log(team);
      //   setTeams(team.response);
    };

    fetchTeams();
  }, []);

  return (
    <>
      <div>
        <h1>Basketball Teams</h1>
        {teams.length > 0 ? (
          teams.map((team) => (
            <div
              key={team.id}
              style={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
            >
              <p>Komanda: {team.name}</p>
              <p>Šalis: {team.country.name}</p>
              <img src={team.logo} alt={team.name} width="100" />
            </div>
          ))
        ) : (
          <p>Kraunama...</p>
        )}
      </div>
    </>
  );
}

export default BastketballTeams;
