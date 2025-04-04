import getTeam from "../utils/getTeam.js";


const TeamPage = (teamId) => {

    const render = async (parentElement) => {

    //    parentElement.innerHTML = `
     //       <h1>Equipo: ${teamId}</h1>
       // `;
        try {
            const data = await getTeam();
            console.log(data);
        
            const raw = data.response.team.name;
            const logo = data.response.team.logo; // lo quería meter a TeamLogo.js pero no me dio tiempo
            const liga = data.response.league.name;
            const tem = data.response.league.season;


            parentElement.innerHTML = `
            <h1>Equipo: ${raw}</h1>
            <img src="${logo}" width="150px" />
            <h1> Formacion: ${liga}<h1>
            <h1> Formacion: ${tem}<h1>
        `;
        }
        catch (error){
            parentElement.innerHTML = `<p>ERROR: ${error.message}</p>`
        }
    }

    return {
        render
    }
}

export default TeamPage;