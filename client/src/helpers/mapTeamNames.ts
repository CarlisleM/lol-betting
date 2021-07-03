const mappedNames = [
	['drx', 'DRX'],
	['ns', 'Nongshim RedForce'],
	['gen', 'Gen.G'],
	['lsb', 'Liiv SANDBOX'],
	['t1', 'T1'],
	['kt', 'KT Rolster'],
	['dk', 'DWG KIA'],
	['hle', 'Hanwha Life Esports'],
	['af', 'Afreeca Freecs'],
	['bto', '⁠Fredit BRION'],
	['msf', 'Misfits Gaming'],
	['xl', 'Excel Esports'],
	['rge', 'Rogue'],
	['vit', 'Team Vitality'],
	['fnc', 'Fnatic'],
	['ast', 'Astralis'],
	['g2', 'G2 Esports'],
	['sk', 'SK Gaming'],
	['s04', 'FC Schalke 04'],
	['mad', 'MAD Lions'],
	['bts', 'Cream Real Betis'],
	['emz', 'eMonkeyz'],
	['mrs', 'Movistar Riders'],
	['g2ar', 'G2 Arctic'],
	['vgia', 'Vodafone Giants'],
	['madm', 'MAD Lions Madrid'],
	['bcn', 'BCN Squad'],
	['s2v', 'S2V Esports'],
	['ucam', 'UCAM Esports Club'],
	['tq', 'Team Queso'],
	['lgc', 'Legacy'],
	['grv', 'Gravitas'],
	['mmm', 'MAMMOTH'],
	['pgg', 'Pentanet.GG'],
	['pce', '⁠PEACE'],
	['ord', 'ORDER'],
	['dw', 'Dire Wolves'],
	['chf', 'Chiefs Esports Club'],
	['msfp', 'Misfits Premier'],
	['sly', 'Solary'],
	['ldlc', 'LDLC OL'],
	['mces', 'Team MCES'],
	['go', 'GamersOrigin'],
	['gw', 'GameWard'],
	['izi', 'Izi Dream'],
	['vitb', 'Vitality.Bee'],
	['hka', 'Hong Kong Attitude'],
	['ahq', 'ahq eSports club'],
	['alf', 'Alpha Esports'],
	['jt', 'J Team'],
	['bjd', 'Berjaya Dragons'],
	['lyb', 'Liyab Esports'],
	['mcx', 'Machi Esports'],
	['nov', 'Nova Esports'],
	['psg', 'PSG Talon'],
	['rsg', 'Resurgence'],
	['dig', 'Dignitas'],
	['imt', 'Immortals'],
	['eg', 'Evil Geniuses'],
	['tl', 'Team Liquid'],
	['clg', 'Counter Logic Gaming'],
	['c9', 'Cloud9'],
	['tsm', 'Team SoloMid'],
	['gg', 'Golden Guardians'],
	['100', '100 Thieves'],
	['fly', 'FlyQuest'],
	['tl.a', 'Team Liquid Academy'],
	['clg.a', 'Counter Logic Gaming Academy'],
	['c9.a', 'Cloud9 Academy'],
	['tsm.a', 'Team SoloMid Academy'],
	['gg.a', 'Golden Guardians Academy'],
	['eg.a', 'Evil Geniuses Academy'],
	['100.a', '100 Thieves Academy'],
	['dig.a', 'Dignitas Academy'],
	['fly.a', 'FlyQuest Academy'],
	['imt.a', 'Immortals Academy'],
	['isg', 'Isurus Gaming'],
	['ak', 'All Knights'],
	['fg', 'Furious Gaming'],
	['inf', 'Infinity Esports'],
	['r7', 'Rainbow7'],
	['xtn', 'XTEN Esports'],
	['klg', 'Kaos Latin Gamers'],
	['est', 'Estral Esports'],
	['rgo', 'AGO ROGUE'],
	['teg', 'Team ESCA Gaming'],
	['pdw', 'PDW'],
	['ggm', "Gentlemen's Gaming"],
	['ihg', 'Illuminar Gaming'],
	['knf', '⁠Komil&Friends'],
	['dv1', '⁠devils.one'],
	['k1', 'K1CK'],
	['fpx', 'FunPlus Phoenix'],
	['tes', 'Top Esports'],
	['rng', 'Royal Never Give Up'],
	['blg', 'Bilibili Gaming'],
	['sn', 'Suning'],
	['edg', 'EDward Gaming'],
	['ig', 'Invictus Gaming'],
	['lng', 'LNG Esports'],
	['we', 'Team WE'],
	['jdg', 'JD Gaming'],
	['ra', 'Rare Atom'],
	['rw', 'Rogue Warriors'],
	['v5', 'Victory Five'],
	['lgd', 'LGD Gaming'],
	['omg', 'Oh My God'],
	['up', 'Ultra Prime'],
	['tt', 'ThunderTalk Gaming'],
	['v3', 'V3 Esports'],
	['sg', 'Sengoku Gaming'],
	['cga', 'Crest Gaming Act'],
	['dfm', 'DetonatioN FocusMe'],
	['shg', 'Fukuoka SoftBank Hawks gaming'],
	['axz', 'AXIZ'],
	['bc', 'Burning Core'],
	['rj', 'Rascal Jester'],
	['bjk', 'Beşiktaş Esports'],
	['dp', 'Dark Passage'],
	['gal', 'Galakticos'],
	['iw', 'İstanbul Wildcats'],
	['fb', '1907 Fenerbahçe'],
	['gs', 'Galatasaray Esports'],
	['5r', '5 Ronin'],
	['sup', 'SuperMassive Blaze'],
	['nsr', 'NASR eSports Turkey'],
	['aur', 'Team AURORA'],
	['per', 'Percent Esports'],
	['opg', 'OverPower Esports'],
	['ces', 'CERBERUS Esports'],
	['evs', 'EVOS Esports'],
	['gam', 'GAM Esports'],
	['ts', 'Team Secret'],
	['sgb', 'Saigon Buffalo'],
	['fl', 'Team Flash'],
	['vrx', 'Vorax Liberty'],
	['kbm', 'KaBuM! e-Sports'],
	['png', 'paiN Gaming'],
	['itz', 'INTZ'],
	['fla', 'Flamengo eSports'],
	['fur', 'FURIA Esports'],
	['red', 'RED Canids'],
	['rns', 'Rensga Esports'],
	['lll', '⁠LOUD'],
	['nmg', 'Netshoes Miners'],
]

export const mapTeamName = (teamName: string) => {
	console.log('teamName: ', teamName)

	const matchingName = mappedNames.find((name) => name[1] === teamName)

	if (matchingName) {
		return matchingName[0]
	} else {
		return null
	}
}
