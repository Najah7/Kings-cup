import { getRandomNumWithIn } from 'helper/game';
import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { LinkButton, StartButton } from "../components/Button/linkButton/linkButton";
import { InputForm } from "../components/InputForm/inputForm";
import { PlayerList } from "../components/PlayerList/playerList";
import { GameInfo } from './_app';


const players = () => {

  // ゲーム情報を取得（コンテキスから）
  const gameInfo = useContext(GameInfo)
  // playerの情報を配列でステートとして保存
  const [playerList, setPlayerList] = useState([]);

  // ランダムなカードをドローするためのランダムな数字
  const randomNum = getRandomNumWithIn(13);
  const randomIndex = getRandomNumWithIn(3);
  // ランダムなカードをドローするために使うマークの配列
  // HACK:どっか違う場所に定数としておいた方がいい
  const marks = ['crowbar', 'diamond', 'heart', 'spade']

  // 次のURLを作成
  const nextUrl = `/game/${marks[randomIndex]}/${randomNum}`

  

  // コンテキストのゲームの情報のplayerの値を更新（追加されるたびに）
  useEffect(() => gameInfo.setPlayers(playerList), [playerList])
  
  useEffect(() => {
    return () => {
      // ドローしたカードが13の時のゲーム情報のキングの数を更新（インクリメント）
      if (randomNum == 13) gameInfo.setNumKings(prev => prev + 1)

    }
  },[])

  

  return (
      <div>
        <InputForm playerList={playerList} setPlayerList={setPlayerList} />
        <LinkButton text='Play' path={nextUrl} />
        <PlayerList playerList={playerList} setPlayerList={setPlayerList} />

      </div>
    
  )
}

export default players