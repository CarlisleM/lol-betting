import { useRef } from "react"
import styled from "styled-components"
import RootStore from "../store"

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const TableHeaderContainer = styled.div`
    display: flex;
`

const TableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 40px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    font-weight: 700;
    color: black;
`

const TableBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 80%;
    overflow: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`

const TableBodyRow = styled.div`
    display: flex;
    color: black;
`

const TableBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 40px;
    border-right: 1px solid black;
`

const TableFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 40px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    color: black;
`

const TableFooterContainer = styled.div`
    display: flex;
`

interface Props {
    leagueId: any
    teamNumber: number
    selectedTeam: any
    games: any
    teams: any
}

const TeamMatchData = (props: Props) => {
    let currentGames =
        props.games &&
        props.games.filter(
            (game: any) =>
                game.blue_team === props.selectedTeam ||
                game.red_team === props.selectedTeam
        )

    let currentTeams =
        props.teams &&
        props.teams.filter((team: any) => team.league_id === props.leagueId)

    const countTeamKills = () => {
        let count = 0
        let games = props.games.filter(
            (game: any) =>
                game.blue_team === props.selectedTeam ||
                game.red_team === props.selectedTeam
        )

        if (games.length > 10) {
            games = games.slice(-10)
        }

        games.forEach((element: any) => {
            if (element["blue_team"] === props.selectedTeam) {
                count += element.match_results[0]["blue_team_kills"]
            }

            if (element["red_team"] === props.selectedTeam) {
                count += element.match_results[0]["red_team_kills"]
            }
        })

        return count
    }

    const countOccurrences = (key: string) => {
        let count = 0
        let games = props.games.filter(
            (game: any) =>
                game.blue_team === props.selectedTeam ||
                game.red_team === props.selectedTeam
        )

        if (games.length > 10) {
            games = games.slice(-10)
        }

        games.forEach((element: any) => {
            if (element.match_results[0][key] === props.selectedTeam) {
                count += 1
            }
        })

        if (games.length === 10) {
            if (count === 0) {
                return "0%"
            } else {
                return count + "0%"
            }
        } else {
            if (count === 0) {
                return "0%"
            } else {
                if (((100 * count) / games.length) % 1 === 0) {
                    return (100 * count) / games.length + "%"
                } else {
                    return ((100 * count) / games.length).toFixed(2) + "%"
                }
            }
        }
    }

    const getTeamAbbreviation = (selectedTeam: string) => {
        let teamDisplayName = selectedTeam
        currentTeams.forEach((element: any) => {
            if (element["name"] === selectedTeam) {
                teamDisplayName = element["abbreviation"]
            }
        })

        return teamDisplayName
    }

    // Scroll to the top of the table on load
    const matchContainerRef = useRef<HTMLDivElement>(null)
    matchContainerRef !== null && matchContainerRef.current?.scrollTo(0, 0)

    return (
        <TableContainer>
            {currentGames !== null && props.selectedTeam !== null && (
                <>
                    <TableHeaderContainer>
                        <TableHeader
                            style={{
                                width: 100,
                                borderLeft: "1px solid black",
                            }}
                        >
                            Game Date
                        </TableHeader>
                        <TableHeader>VS</TableHeader>
                        <TableHeader>FB</TableHeader>
                        <TableHeader>FT</TableHeader>
                        <TableHeader>FD</TableHeader>
                        <TableHeader>FRH</TableHeader>
                        <TableHeader>FI</TableHeader>
                        <TableHeader style={{ width: 60 }}>FBaron</TableHeader>
                        <TableHeader>W/L</TableHeader>
                        <TableHeader>Kills</TableHeader>
                    </TableHeaderContainer>
                    <TableBodyContainer ref={matchContainerRef}>
                        {currentGames.length > 0 &&
                            currentGames.map((match: any, index: number) => (
                                <TableBodyRow>
                                    <TableBody
                                        style={{
                                            width: 100,
                                            borderLeft: "1px solid black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                            backgroundColor:
                                                props.teamNumber === 1
                                                    ? match.red_team ===
                                                          RootStore.selectedTeamTwo ||
                                                      match.blue_team ===
                                                          RootStore.selectedTeamTwo
                                                        ? "darkgrey"
                                                        : "transparent"
                                                    : match.red_team ===
                                                          RootStore.selectedTeamOne ||
                                                      match.blue_team ===
                                                          RootStore.selectedTeamOne
                                                    ? "darkgrey"
                                                    : "transparent",
                                        }}
                                    >
                                        {match.game_date.split("T")[0]}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                            backgroundColor:
                                                props.teamNumber === 1
                                                    ? match.red_team ===
                                                          RootStore.selectedTeamTwo ||
                                                      match.blue_team ===
                                                          RootStore.selectedTeamTwo
                                                        ? "darkgrey"
                                                        : "transparent"
                                                    : match.red_team ===
                                                          RootStore.selectedTeamOne ||
                                                      match.blue_team ===
                                                          RootStore.selectedTeamOne
                                                    ? "darkgrey"
                                                    : "transparent",
                                        }}
                                    >
                                        {props.selectedTeam === match.blue_team
                                            ? getTeamAbbreviation(
                                                  match.red_team
                                              )
                                            : getTeamAbbreviation(
                                                  match.blue_team
                                              )}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_blood
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_blood ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_blood
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_blood
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_blood ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_blood
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_tower
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_tower ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_tower
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_tower
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_tower ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_tower
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_dragon
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_dragon ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_dragon
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_dragon
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_dragon ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_dragon
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_rift_herald
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_rift_herald ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_rift_herald
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_rift_herald
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_rift_herald ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_rift_herald
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_inhibitor
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_inhibitor ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_inhibitor
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_inhibitor
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_inhibitor ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_inhibitor
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            width: 60,
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0]
                                                    .first_baron
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .first_baron ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .first_baron
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].first_baron
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .first_baron ||
                                              match.red_team ===
                                                  match.match_results[0]
                                                      .first_baron
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>
                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                props.selectedTeam ===
                                                match.match_results[0].winner
                                                    ? "lightgreen"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "salmon"
                                                    : match.blue_team ===
                                                          match.match_results[0]
                                                              .winner ||
                                                      match.red_team ===
                                                          match.match_results[0]
                                                              .winner
                                                    ? "cornflowerblue"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam ===
                                        match.match_results[0].winner
                                            ? "✓"
                                            : match.blue_team ===
                                                  match.match_results[0]
                                                      .winner ||
                                              match.red_team ===
                                                  match.match_results[0].winner
                                            ? "✘"
                                            : "〜"}
                                    </TableBody>

                                    <TableBody
                                        style={{
                                            backgroundColor:
                                                match.blue_team ===
                                                    match.match_results[0]
                                                        .winner ||
                                                match.red_team ===
                                                    match.match_results[0]
                                                        .winner
                                                    ? props.selectedTeam ===
                                                      match.blue_team
                                                        ? match.match_results[0]
                                                              .blue_team_kills >
                                                          match.match_results[0]
                                                              .red_team_kills
                                                            ? "lightgreen"
                                                            : "salmon"
                                                        : match.match_results[0]
                                                              .red_team_kills >
                                                          match.match_results[0]
                                                              .blue_team_kills
                                                        ? "lightgreen"
                                                        : "salmon"
                                                    : "black",
                                            borderBottom:
                                                index < currentGames.length - 1
                                                    ? "1px solid black"
                                                    : "none",
                                        }}
                                    >
                                        {props.selectedTeam === match.blue_team
                                            ? match.match_results[0]
                                                  .blue_team_kills
                                            : match.match_results[0]
                                                  .red_team_kills}
                                    </TableBody>
                                </TableBodyRow>
                            ))}
                    </TableBodyContainer>

                    <TableFooterContainer>
                        <TableFooter
                            style={{
                                width: 156,
                                borderLeft: "1px solid black",
                            }}
                        />
                        <TableFooter>
                            {countOccurrences("first_blood")}
                        </TableFooter>
                        <TableFooter>
                            {countOccurrences("first_tower")}
                        </TableFooter>
                        <TableFooter>
                            {countOccurrences("first_dragon")}
                        </TableFooter>
                        <TableFooter>
                            {countOccurrences("first_rift_herald")}
                        </TableFooter>
                        <TableFooter>
                            {countOccurrences("first_inhibitor")}
                        </TableFooter>
                        <TableFooter style={{ width: 60 }}>
                            {countOccurrences("first_baron")}
                        </TableFooter>
                        <TableFooter>{countOccurrences("winner")}</TableFooter>
                        <TableFooter>{countTeamKills()}</TableFooter>
                    </TableFooterContainer>
                </>
            )}
        </TableContainer>
    )
}

export default TeamMatchData
