1
    SELECT matchid, player 
    FROM goal
    WHERE teamid ='GER';

2
    SELECT id,stadium,team1,team2
    FROM game
    WHERE id=1012;

3
    SELECT goal.player, goal.teamid, game.stadium, game.mdate
    FROM game JOIN goal ON (id=matchid)
    WHERE goal.teamid='GER';

4
    SELECT game.team1, game.team2, goal.player
    FROM game JOIN goal ON (id=matchid)
    WHERE goal.player LIKE 'Mario%';

5
    SELECT goal.player, goal.teamid, eteam.coach, goal.gtime
    FROM goal JOIN eteam on teamid=id
    WHERE goal.gtime<=10;

6
    SELECT mdate, teamname
    FROM game JOIN eteam ON (team1=eteam.id)
    WHERE coach = 'Fernando Santos';

7
    SELECT player
    FROM game JOIN goal ON (id=matchid)
    WHERE stadium = 'National Stadium, Warsaw';

8
    SELECT DISTINCT player
    FROM game JOIN goal ON goal.matchid = game.id
    WHERE (team1 = 'GER' OR team2 = 'GER')AND teamid <> 'GER';

9
    SELECT eteam.teamname, COUNT(goal.gtime)
    FROM eteam JOIN goal ON id=teamid
    GROUP BY eteam.teamname
    ORDER BY teamname;

10
    SELECT stadium, COUNT(gtime)
    FROM game JOIN goal ON (id=matchid)
    GROUP BY stadium
    ORDER BY stadium;

11
    SELECT game.id, game.mdate, COUNT(*)
    FROM game JOIN goal ON game.id = goal.matchid
    WHERE (game.team1 = 'POL' OR game.team2 = 'POL')
    GROUP BY game.id, game.mdate
    ORDER BY game.id;