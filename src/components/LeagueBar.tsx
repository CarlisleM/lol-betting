import styled from "styled-components"
import RootStore from "../store"
import { Observer } from "mobx-react"

const League = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid black;

    &:hover {
        background-color: #e8e8e8 !important;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

interface Props {
    leagues: any
    games: any
    upcomingGames: any
}

const LeagueBar = (props: Props) => {
    const leagueLogo = (leagueName: any) => (
        <Logo>
            <img
                style={{
                    objectFit: "contain",
                    width: "90%",
                    height: "90%",
                }}
                src={`/../images/leagues/${leagueName.toLowerCase()}.png`}
                alt={`${leagueName}`}
            />
        </Logo>
    )

    return (
        <Observer>
            {() => (
                <>
                    {props.leagues &&
                        props.leagues.map((league: any, index: number) => (
                            <League
                                style={{
                                    backgroundColor:
                                        league.id === RootStore.selectedLeague
                                            ? "gold"
                                            : "unset",
                                }}
                                key={index}
                                onClick={() => {
                                    if (
                                        league.id !==
                                            RootStore.selectedLeague &&
                                        props.upcomingGames.filter(
                                            (game: any) =>
                                                game.league_id === league.id
                                        ).length > 0
                                    ) {
                                        RootStore.updateSelectedTeamOne(
                                            props.upcomingGames.filter(
                                                (game: any) =>
                                                    game.league_id === league.id
                                            )[0].blue_team
                                        )
                                        RootStore.updateSelectedTeamTwo(
                                            props.upcomingGames.filter(
                                                (game: any) =>
                                                    game.league_id === league.id
                                            )[0].red_team
                                        )
                                    } else if (
                                        league.id !==
                                            RootStore.selectedLeague &&
                                        props.upcomingGames.filter(
                                            (game: any) =>
                                                game.league_id === league.id
                                        ).length === 0
                                    ) {
                                        // TODO:
                                        RootStore.updateSelectedTeamOne(
                                            props.games.filter(
                                                (game: any) =>
                                                    game.league_id === league.id
                                            )[0].blue_team
                                        )
                                        RootStore.updateSelectedTeamTwo(
                                            props.games.filter(
                                                (game: any) =>
                                                    game.league_id === league.id
                                            )[0].red_team
                                        )
                                    }

                                    RootStore.updateSelectedLeague(league.id)
                                }}
                            >
                                {leagueLogo(league.name)}
                            </League>
                        ))}
                </>
            )}
        </Observer>
    )
}

export default LeagueBar
