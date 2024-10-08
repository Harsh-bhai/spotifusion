"use client"
import React from 'react'
import RecentlyPlayed from '@/components/analytics/recentlyPlayed'
import TopTracks from '@/components/analytics/topTracks'
import TopArtists from '@/components/analytics/topArtists'
import GetRecomendations from '@/components/analytics/getRecomendations'

const Analytics = () => {
  return (
    <div>
      <RecentlyPlayed />
      <TopTracks/>
      <TopArtists/>
      <GetRecomendations/>
    </div>
  )
}

export default Analytics