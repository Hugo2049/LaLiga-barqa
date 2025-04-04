const TeamLogo = () => {

    const render = (raw) => {

        return `
            <div class="text-center mt-4">
                <img src="${league.logo}" width="150px" />
            </div>
        `;
    }

    return {
        render
    }
}

export default TeamLogo;