
// [INFO][2025-05-20T10:17:04-07:00][schedule.tsx]
// This page provides a dedicated /schedule route with the official schedule iframe embedded.
// Assumes the app uses ChoosePrimaryLayout for header/footer and meta, as seen in other pages.
// Logs are included for hydration/debugging.

import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '../components/worldsfair-2025/useLocalStorage';
// import { ChoosePrimaryLayout } from '../components/ChoosePrimaryLayout';
// // [INFO][2025-05-20T10:19:31-07:00] Importing Header for explicit page header
import { Header } from '../components/worldsfair-2025/Header'; // [INFO][2025-05-20T10:54:38-07:00] Un-commented for always-visible header
// import { HeroBuyTickets } from '../components/worldsfair-2025/HeroBuyTickets';
// import { NewsletterFormThree } from '../components/Newsletter';

type ScheduleView = 'calendar' | 'list' | 'detailed';

interface ScheduleViewButtonProps {
  activeView: ScheduleView;
  viewName: ScheduleView;
  label: string;
  onClick: () => void;
}

const ScheduleViewButton: React.FC<ScheduleViewButtonProps> = ({
  activeView,
  viewName,
  label,
  onClick,
}) => (
  <button
    key={activeView}
    onClick={onClick}
    className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
      activeView === viewName
        ? 'bg-blue-600 text-white border border-blue-600'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
    }`}
  >
    {label}
  </button>
);

const SchedulePage: NextPage = () => {
  const [activeView, setActiveView] = useLocalStorage<ScheduleView>(
    'scheduleView',
    'calendar' as ScheduleView
  );
  const [iframeContent, setIframeContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  // Fetch and modify HTML content when activeView changes
  useEffect(() => {
    const fetchHtml = async () => {
      setIsLoading(true);
      try {
        const url = activeView === 'calendar' 
          ? 'https://sessionize.com/api/v2/hyxh7ov6/view/GridSmart'
          : activeView === 'list'
          ? 'https://sessionize.com/api/v2/0si6nqex/view/GridSmart'
          : 'https://sessionize.com/api/v2/0si6nqex/view/Sessions';
        
        const response = await fetch(url);
        let html = await response.text();
        
        // Add your custom string here - for example, appending a script
        const customScript = `
          <style>
            console.log('Custom script injected into ${activeView} view');
            // Add any custom JavaScript here
            ${`
              #sz-color-main {
    color: #e8e9e9
}

#sz-color-accent {
    color: #B9BABA
}

#sz-color-text {
    color: #111
}

#sz-color-background {
    color: #FFF
}

#sz-color-main-text {
    color: #111
}

#sz-color-accent-text {
    color: #111
}

#sessionize.sessionize-wrapper {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #111
}

#sessionize.sessionize-wrapper * {
    box-sizing: border-box;
    padding: 0;
    margin: 0
}

#sessionize.sessionize-wrapper *:before,#sessionize.sessionize-wrapper *:after,#sessionize.sessionize-wrapper ul li:before,#sessionize.sessionize-wrapper ul li:after {
    content: none
}

#sessionize.sessionize-wrapper ul {
    list-style: none;
    margin: 0;
    padding: 0
}

#sessionize.sessionize-wrapper a {
    color: #111;
    text-decoration: none;
    border-bottom: none;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper a:hover,#sessionize.sessionize-wrapper a:focus,#sessionize.sessionize-wrapper a:active {
    opacity: .9;
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.5)
}

#sessionize.sessionize-wrapper .sz-session__card {
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all .15s ease-in;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-session__title {
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-session--limit-heading .sz-session__title {
    font-size: 16px;
    line-height: 24px;
    max-height: 72px;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-session__speakers {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap
}

#sessionize.sessionize-wrapper .sz-session__speakers:after {
    content: "";
    display: table;
    clear: both
}

#sessionize.sessionize-wrapper .sz-session__speakers li {
    display: inline-block;
    margin-right: .5em;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-session__tags,#sessionize.sessionize-wrapper .sz-speaker__tags {
    list-style: none;
    margin: 0;
    padding: 0
}

#sessionize.sessionize-wrapper .sz-session__tags:empty,#sessionize.sessionize-wrapper .sz-speaker__tags:empty {
    display: none
}

#sessionize.sessionize-wrapper .sz-session__tags li,#sessionize.sessionize-wrapper .sz-speaker__tags li {
    display: inline-block;
    margin-right: .125em;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold;
    padding: 0 .5em;
    background-color: rgba(17,17,17,0.1);
    border-radius: 2px
}

#sessionize.sessionize-wrapper .sz-session__room {
    display: inline-block;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #111;
    background-color: #fff;
    border-radius: 2px;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-session__time {
    display: inline-block;
    font-size: 12px;
    line-height: 1.5;
    opacity: .6
}

#sessionize.sessionize-wrapper .sz-session__ticker {
    width: 1.25rem;
    height: 1.25rem;
    transform: rotate(-90deg) scaleY(-1);
    border-radius: 50%;
    background: rgba(17,17,17,0.1)
}

#sessionize.sessionize-wrapper .sz-session__ticker circle {
    fill: none;
    stroke-width: 32;
    transition: all .3s ease;
    stroke: #e8e9e9;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-session__meta-group {
    margin-bottom: 4px
}

#sessionize.sessionize-wrapper .sz-session--plenum .sz-session__card {
    justify-content: center;
    align-items: center
}

#sessionize.sessionize-wrapper .sz-session__video {
    position: relative;
    top: -.125rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.5rem;
    min-width: 1.5rem;
    padding: 2px;
    margin-left: 8px;
    border: 0.125rem solid #111;
    border-radius: 50%
}

#sessionize.sessionize-wrapper .sz-session__video:after {
    box-sizing: border-box;
    border-style: solid;
    width: .375rem;
    height: .5rem;
    border-width: .25rem 0 .25rem .375rem;
    border-color: transparent transparent transparent #111;
    content: ""
}

#sessionize.sessionize-wrapper .sz-session__video:hover,#sessionize.sessionize-wrapper .sz-session__video:focus,#sessionize.sessionize-wrapper .sz-session__video:active {
    background-color: #111;
    box-shadow: none;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-session__video:hover:after,#sessionize.sessionize-wrapper .sz-session__video:focus:after,#sessionize.sessionize-wrapper .sz-session__video:active:after {
    border-color: transparent transparent transparent #e8e9e9
}

#sessionize.sessionize-wrapper .sz-session__live {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.625rem;
    min-width: 1.5rem;
    padding: 0 8px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold;
    text-transform: uppercase;
    color: #111;
    background: #b4b7b7;
    border-radius: 4px
}

#sessionize.sessionize-wrapper .sz-session__live:after {
    margin-left: 4px;
    width: .375rem;
    height: .375rem;
    border-radius: 50%;
    background: #111;
    animation: sz-dot-pulse ease-in-out infinite 1.25s;
    content: ""
}

#sessionize.sessionize-wrapper .sz-session__live:hover,#sessionize.sessionize-wrapper .sz-session__live:focus,#sessionize.sessionize-wrapper .sz-session__live:active {
    background: #9a9e9e;
    box-shadow: none !important;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-session__live.is-disabled {
    opacity: .3;
    color: #111;
    background: #b4b7b7;
    pointer-events: none
}

#sessionize.sessionize-wrapper .sz-session__live.is-disabled:after {
    opacity: .5;
    animation: none
}

#sessionize.sessionize-wrapper .sz-session__live.is-disabled:hover,#sessionize.sessionize-wrapper .sz-session__live.is-disabled:focus,#sessionize.sessionize-wrapper .sz-session__live.is-disabled:active {
    color: #111;
    background: #b4b7b7
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card {
    height: auto;
    display: block
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session+.sz-session {
    margin-top: .125rem
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__track-label {
    display: none
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__time-label {
    padding: 12px 0;
    font-size: 14px;
    line-height: 20px
}

@supports (display: grid) {
    @media (max-width: 37.4375em) {
        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session__room {
            padding:0;
            font-weight: regular;
            text-transform: none;
            color: #111;
            background-color: transparent
        }
    }

    @media (min-width: 37.5em) {
        #sessionize.sessionize-wrapper .sz-cssgrid {
            display:grid;
            grid-column-gap: 2px;
            grid-row-gap: 2px
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session {
            position: relative;
            z-index: 200;
            display: flex
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session:hover {
            z-index: 210
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session+.sz-session {
            margin-top: 0
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card {
            display: flex;
            width: 100%;
            height: 100%
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__time-label {
            grid-column: times;
            font-weight: normal
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__time-separator {
            position: relative;
            z-index: 199;
            border-top: 1px dotted rgba(17,17,17,0.2)
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__time-overlapping {
            display: none
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-cssgrid__track-label {
            position: sticky;
            top: 0;
            z-index: 400;
            display: flex;
            padding: 12px;
            align-items: flex-end;
            font-size: 16px;
            line-height: 20px;
            color: #111;
            background-color: #fff;
            border-radius: 2px
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session__room {
            display: none
        }

        #sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__room {
            display: inline-block
        }
    }
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card {
    padding: 12px;
    border-top-color: #e8e9e9;
    color: #111;
    background: #e8e9e9;
    border-radius: 2px;
    box-shadow: 0 0 0 2px #fff;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card .sz-session__tags {
    margin-top: 4px;
    height: 18px;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card .sz-session__tags li {
    vertical-align: top
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card:hover {
    background: #ced0d0;
    border-top-color: #a7abab;
    box-shadow: 0 0 0 2px #fff,0 1em 2.5em 0 rgba(0,0,0,0.25)
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card a:hover,#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card a:focus,#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card a:active {
    box-shadow: 0 1px 0 0 rgba(255,255,255,0.5)
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card .sz-session__video:hover,#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card .sz-session__video:focus,#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__card .sz-session__video:active {
    box-shadow: none;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--service {
    z-index: 100
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--service .sz-session__card {
    border-top-color: #B9BABA;
    background: #B9BABA
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--service .sz-session__card:hover {
    background: #9fa1a1;
    border-top-color: #797b7b
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__title {
    font-size: 20px;
    line-height: 28px
}

@media (min-width: 37.5em) {
    #sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__card {
        text-align:center
    }

    #sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__title {
        overflow: visible
    }

    #sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__speakers {
        justify-content: center
    }
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--service .sz-session__live,#sessionize.sessionize-wrapper .sz-cssgrid .sz-session--plenum .sz-session__live {
    vertical-align: middle
}

#sessionize.sessionize-wrapper .sz-cssgrid .sz-session__live.is-disabled {
    display: none
}

#sessionize.sessionize-wrapper .sz-grid .sz-day__container {
    position: relative;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 48px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden
}

@media (min-width: 48em) {
    #sessionize.sessionize-wrapper .sz-grid .sz-day__container {
        min-width:900px
    }
}

#sessionize.sessionize-wrapper .sz-grid .sz-time {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 48px
}

#sessionize.sessionize-wrapper .sz-grid .sz-time ol {
    list-style: none;
    margin: 0;
    padding: 0
}

#sessionize.sessionize-wrapper .sz-grid .sz-time li {
    border-top: 1px dotted rgba(17,17,17,0.2);
    height: 96px;
    font-size: 12px;
    line-height: 1.5;
    text-transform: uppercase;
    text-align: left
}

#sessionize.sessionize-wrapper .sz-grid .sz-time__value {
    padding: 4px 0;
    display: block
}

#sessionize.sessionize-wrapper .sz-grid .sz-track {
    position: relative;
    flex-grow: 1;
    width: 20%;
    min-width: 240px
}

#sessionize.sessionize-wrapper .sz-grid .sz-track__title {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    padding: 12px 4px;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

#sessionize.sessionize-wrapper .sz-grid .sz-track__container {
    padding: 0 4px;
    position: relative
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--grid {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 200;
    padding: 1px;
    border-radius: 2px
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--grid:hover {
    z-index: 300;
    background-color: #fff
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__card {
    padding: 12px;
    color: #111;
    background: #e8e9e9;
    border-radius: 2px;
    box-shadow: 0 0 0 2px #fff;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__card .sz-session__tags {
    margin-top: 4px;
    height: 18px;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__card .sz-session__tags li {
    vertical-align: top
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__card:hover {
    background: #ced0d0;
    border-top-color: #a7abab;
    box-shadow: 0 0 0 2px #fff,0 1em 2.5em 0 rgba(0,0,0,0.25)
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__card a:hover,#sessionize.sessionize-wrapper .sz-grid .sz-session__card a:focus,#sessionize.sessionize-wrapper .sz-grid .sz-session__card a:active {
    box-shadow: 0 1px 0 0 rgba(255,255,255,0.5)
}

#sessionize.sessionize-wrapper .sz-grid .sz-session__room {
    display: none
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--service {
    z-index: 100
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--service .sz-session__card {
    background: #B9BABA
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--service .sz-session__card:hover {
    background: #9fa1a1
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--service .sz-session__card:hover .sz-session__room {
    display: inline-block
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--plenum .sz-session__card {
    text-align: center
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--plenum .sz-session__title {
    overflow: visible;
    font-size: 24px;
    line-height: 32px
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--plenum .sz-session__room {
    display: inline-block
}

#sessionize.sessionize-wrapper .sz-grid .sz-session--plenum .sz-session__speakers {
    justify-content: center
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-table {
    position: relative;
    margin-bottom: 16px
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-scroll {
    position: relative;
    overflow-x: auto;
    border-right: 1px solid rgba(17,17,17,0.1)
}

#sessionize.sessionize-wrapper .sz-gridtable table {
    max-width: 100%;
    width: 100%;
    margin-bottom: 0;
    border: none;
    border-collapse: collapse;
    border-radius: 4px
}

#sessionize.sessionize-wrapper .sz-gridtable th {
    padding: 8px 16px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgba(17,17,17,0.1)
}

#sessionize.sessionize-wrapper .sz-gridtable td,#sessionize.sessionize-wrapper .sz-gridtable th {
    width: 1000px;
    border-bottom: 1px solid rgba(17,17,17,0.1);
    padding: 16px 24px;
    vertical-align: top
}

#sessionize.sessionize-wrapper .sz-gridtable thead th {
    background-color: rgba(17,17,17,0.1)
}

#sessionize.sessionize-wrapper .sz-gridtable tbody th:first-child {
    width: 1%;
    white-space: nowrap
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-session__title {
    color: #e8e9e9
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-session__room {
    display: none
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-session--plenum .sz-session__title {
    color: #B9BABA;
    font-size: 20px
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-session--plenum .sz-session__room {
    display: inline-block;
    color: #111;
    background-color: #B9BABA
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-row-highlight th {
    color: rgba(17,17,17,0.8)
}

#sessionize.sessionize-wrapper .sz-gridtable .sz-session__room {
    color: #111;
    background-color: #e8e9e9
}

@media (max-width: 47.9375em) {
    #sessionize.sessionize-wrapper .sz-gridtable table {
        border:none
    }

    #sessionize.sessionize-wrapper .sz-gridtable td,#sessionize.sessionize-wrapper .sz-gridtable th {
        display: block;
        border: none;
        width: auto;
        padding: 8px 16px
    }

    #sessionize.sessionize-wrapper .sz-gridtable thead {
        display: none
    }

    #sessionize.sessionize-wrapper .sz-gridtable tbody th:first-child {
        width: 100%
    }

    #sessionize.sessionize-wrapper .sz-gridtable tr {
        margin-bottom: 16px;
        display: block;
        border: 1px solid rgba(17,17,17,0.2);
        border-radius: 2px
    }

    #sessionize.sessionize-wrapper .sz-gridtable td[data-room-name]:before {
        display: block;
        margin-bottom: 8px;
        margin-top: -8px;
        margin-left: -16px;
        margin-right: -16px;
        padding: 8px 16px;
        background-color: rgba(17,17,17,0.2);
        color: rgba(17,17,17,0.8);
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        content: attr(data-room-name)
    }

    #sessionize.sessionize-wrapper .sz-gridtable .sz-session__room {
        display: none
    }

    #sessionize.sessionize-wrapper .sz-gridtable .sz-row-highlight td {
        color: rgba(17,17,17,0.8);
        background-color: transparent
    }

    #sessionize.sessionize-wrapper .sz-gridtable .sz-row-highlight td .sz-session__title {
        color: #B9BABA
    }

    #sessionize.sessionize-wrapper .sz-gridtable .sz-session-empty {
        display: none
    }
}

#sessionize.sessionize-wrapper .sz-speakers--wall {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap
}

#sessionize.sessionize-wrapper .sz-speakers--wall .sz-speaker {
    display: inline-block;
    flex-grow: 1;
    width: 256px;
    padding: 8px;
    margin-bottom: 16px;
    text-align: center
}

#sessionize.sessionize-wrapper .sz-speakers--list {
    list-style: none;
    margin: 0;
    padding: 0
}

#sessionize.sessionize-wrapper .sz-speakers--list .sz-speaker {
    padding: 16px;
    border: 1px solid rgba(17,17,17,0.1);
    border-radius: 4px;
    margin-top: 8px
}

@media (min-width: 37.5em) {
    #sessionize.sessionize-wrapper .sz-speakers--list .sz-speaker {
        padding:24px
    }
}

#sessionize.sessionize-wrapper .sz-speaker__links {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-speaker__links li {
    display: inline-block
}

#sessionize.sessionize-wrapper .sz-speaker__links .sz-speaker__link {
    display: block;
    padding: 4px;
    border: 1px solid rgba(17,17,17,0.1);
    font-size: 20px;
    line-height: 20px;
    color: #e8e9e9;
    border-radius: 2px;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-speaker__links .sz-speaker__link:hover,#sessionize.sessionize-wrapper .sz-speaker__links .sz-speaker__link:focus,#sessionize.sessionize-wrapper .sz-speaker__links .sz-speaker__link:active {
    opacity: 1;
    color: #111;
    background-color: #B9BABA;
    box-shadow: none
}

#sessionize.sessionize-wrapper .sz-speaker__link-label {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden
}

#sessionize.sessionize-wrapper .sz-speaker__link-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    vertical-align: middle
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--compact .sz-speaker__photo {
    width: 128px;
    height: 128px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    border: 4px solid rgba(17,17,17,0.1);
    border-radius: 50%
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--compact .sz-speaker__photo img {
    display: block;
    width: 100%;
    margin: 0 auto;
    border-radius: 50%
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--compact .sz-speaker__photo--placeholder {
    width: 128px;
    height: 128px;
    background-color: #fff;
    border-left-color: #e8e9e9;
    border-top-color: #e8e9e9;
    border-right-color: #B9BABA;
    border-bottom-color: #B9BABA
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--compact .sz-speaker__name {
    margin-bottom: 0;
    font-size: 20px;
    line-height: 1.25;
    font-weight: bold;
    color: #111
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--compact .sz-speaker__tagline {
    font-size: 14px;
    line-height: 1.5;
    font-weight: normal;
    color: rgba(17,17,17,0.6)
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full {
    text-align: left
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full:after {
    content: "";
    display: table;
    clear: both
}

@media (min-width: 37.5em) {
    #sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full {
        margin-top:16px
    }
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full:first-child {
    margin-top: 0
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__photo {
    float: left;
    margin-top: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
    max-width: 96px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__photo img {
    display: block;
    width: 100%;
    border-radius: 2px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__photo--placeholder {
    display: none
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__name {
    margin-bottom: 2px;
    font-size: 20px;
    line-height: 1.25;
    font-weight: bold;
    color: #111
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__tagline {
    margin-bottom: 2px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
    color: #B9BABA
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__bio {
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__tags {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__tags li {
    display: inline-block;
    margin-right: .5em;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.5
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions:empty {
    display: none
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions dt,#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions dd {
    display: inline-block
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions dt {
    color: rgba(17,17,17,0.6);
    font-size: 11px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions dd {
    margin-right: 4px;
    padding-right: 8px;
    border-right: 1px solid rgba(17,17,17,0.2);
    color: #111
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__questions dd:last-child {
    border-right: none
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__sessions {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__sessions li {
    position: relative;
    display: block;
    padding-left: 16px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-speaker.sz-speaker--full .sz-speaker__sessions li:before {
    position: absolute;
    top: 10px;
    left: 0;
    width: 10px;
    height: 2px;
    background-color: #e8e9e9;
    content: ""
}

#sessionize.sessionize-wrapper .sz-sessions--list {
    list-style: none;
    margin: 0;
    padding: 0
}

#sessionize.sessionize-wrapper .sz-sessions--list .sz-session.sz-session--full {
    margin-top: 8px;
    padding: 16px;
    border: 1px solid rgba(17,17,17,0.1);
    border-radius: 4px
}

@media (min-width: 37.5em) {
    #sessionize.sessionize-wrapper .sz-sessions--list .sz-session.sz-session--full {
        padding:24px
    }
}

@media (min-width: 37.5em) {
    #sessionize.sessionize-wrapper .sz-sessions--list .sz-session.sz-session--full {
        margin-top:16px
    }
}

#sessionize.sessionize-wrapper .sz-sessions--list .sz-session.sz-session--full:first-child {
    margin-top: 0
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full {
    text-align: left
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__speakers {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 4px
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__speakers li {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
    color: #e8e9e9
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__title {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 20px;
    line-height: 1.5;
    color: #111
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__description {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__room {
    display: inline-flex;
    align-items: center;
    min-height: 1.625rem;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 1.5;
    color: #111;
    background-color: #B9BABA;
    border-radius: 4px
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__time {
    display: inline-flex;
    align-items: center;
    min-height: 1.625rem;
    padding: 2px 8px;
    font-size: 14px;
    line-height: 1.5;
    text-transform: none;
    opacity: 1;
    color: #111;
    background-color: #e8e9e9;
    border-radius: 4px
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__tags {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__tags li {
    display: inline-block;
    margin-right: .5em;
    font-size: 12px;
    line-height: 1.5;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video {
    margin-top: 0;
    margin-right: 4px;
    border-color: #e8e9e9
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:after {
    border-color: transparent transparent transparent #e8e9e9
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:hover,#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:focus,#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:active {
    background-color: #e8e9e9;
    box-shadow: none;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:hover:after,#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:focus:after,#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__video:active:after {
    border-color: transparent transparent transparent #111
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__live {
    border-color: transparent
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.5
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions:empty {
    display: none
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions dt,#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions dd {
    display: inline-block
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions dt {
    color: rgba(17,17,17,0.6);
    font-size: 11px
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions dd {
    margin-right: 4px;
    padding-right: 8px;
    border-right: 1px solid rgba(17,17,17,0.2);
    color: #111
}

#sessionize.sessionize-wrapper .sz-session.sz-session--full .sz-session__questions dd:last-child {
    border-right: none
}

#sessionize.sessionize-wrapper .sz-next__title {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1.5
}

#sessionize.sessionize-wrapper .sz-next__group {
    margin-bottom: 16px
}

#sessionize.sessionize-wrapper .sz-next__group:last-child {
    margin-top: 0
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__card {
    padding: 1rem;
    border: 1px solid rgba(17,17,17,0.1);
    border-radius: 4px;
    align-items: start
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__meta-group {
    display: flex;
    align-items: center
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__time {
    order: 1;
    margin-right: 8px;
    display: inline-block;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #e8e9e9;
    color: #111;
    border-radius: 4px;
    opacity: 1
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__room {
    padding: 0;
    order: 3
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__ticker {
    margin-right: 8px;
    order: 2
}

#sessionize.sessionize-wrapper .sz-session--next .sz-session__live {
    margin-top: 0;
    margin-right: 4px;
    border-color: transparent
}

#sessionize.sessionize-wrapper .sz-session--next+.sz-session--next {
    margin-top: 8px
}

#sessionize.sessionize-wrapper .sz-tabs {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    margin-bottom: 16px !important;
    text-align: center
}

#sessionize.sessionize-wrapper .sz-tabs__item {
    display: inline-block;
    margin: 4px;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-tabs__link {
    position: relative;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: rgba(17,17,17,0.6);
    border-radius: 2px;
    border: 1px solid rgba(17,17,17,0.1) !important;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-tabs__link:hover,#sessionize.sessionize-wrapper .sz-tabs__link:focus,#sessionize.sessionize-wrapper .sz-tabs__link:active {
    color: #111;
    background-color: #e8e9e9;
    box-shadow: none !important
}

#sessionize.sessionize-wrapper .sz-tabs__item--active {
    border-color: transparent
}

#sessionize.sessionize-wrapper .sz-tabs__item--active .sz-tabs__link {
    color: #111;
    background-color: #e8e9e9;
    box-shadow: none
}

#sessionize.sessionize-wrapper .sz-tabs__item--active .sz-tabs__link:hover,#sessionize.sessionize-wrapper .sz-tabs__item--active .sz-tabs__link:focus,#sessionize.sessionize-wrapper .sz-tabs__item--active .sz-tabs__link:active {
    color: #111;
    background-color: #e8e9e9
}

#sessionize.sessionize-wrapper .sz-tab-container {
    display: none
}

#sessionize.sessionize-wrapper .sz-tab-container--active {
    display: block
}

#sessionize.sessionize-wrapper .sz-timezone {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px !important;
    padding: 8px !important;
    border-radius: 2px
}

#sessionize.sessionize-wrapper .sz-timezone svg {
    width: 20px;
    height: 20px;
    fill: #111
}

#sessionize.sessionize-wrapper .sz-timezone__radio {
    position: relative;
    display: flex;
    align-items: center
}

#sessionize.sessionize-wrapper .sz-timezone__radio label {
    padding: 4px 0;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #111;
    font-weight: bold
}

#sessionize.sessionize-wrapper .sz-timezone__radio small {
    font-size: 12px;
    line-height: 16px;
    color: rgba(17,17,17,0.6)
}

#sessionize.sessionize-wrapper .sz-timezone__radio input[type="radio"] {
    position: absolute;
    opacity: 0
}

#sessionize.sessionize-wrapper .sz-timezone__radio input[type="radio"]:hover+label {
    box-shadow: inset 0 -0.125rem 0 0 rgba(232,233,233,0.4)
}

#sessionize.sessionize-wrapper .sz-timezone__radio input[type="radio"]:hover+label [role="tooltip"] {
    display: block
}

#sessionize.sessionize-wrapper .sz-timezone__radio input[type="radio"]:checked+label {
    box-shadow: inset 0 -0.125rem 0 0 #e8e9e9;
    color: #e8e9e9
}

#sessionize.sessionize-wrapper .sz-timezone__tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 400;
    transform: translateX(-50%);
    display: none;
    margin-bottom: 8px;
    padding: 4px 8px;
    white-space: nowrap;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    font-weight: bold;
    background-color: #fff;
    color: #111;
    box-shadow: 0 0.125rem 0.25em 0 rgba(0,0,0,0.25);
    border-radius: 4px
}

#sessionize.sessionize-wrapper .sz-modal-container {
    text-align: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center
}

#sessionize.sessionize-wrapper .sz-modal-container.is-hidden {
    display: none
}

#sessionize.sessionize-wrapper .sz-modal-container-inner {
    max-height: 80%
}

#sessionize.sessionize-wrapper .sz-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(116,117,117,0.9)
}

#sessionize.sessionize-wrapper .sz-modal {
    position: relative;
    margin: 24px auto;
    padding: 16px;
    max-width: 30em;
    box-shadow: 0 1em 5em 0 rgba(0,0,0,0.25);
    border-radius: 4px;
    background-color: #fff;
    text-align: left
}

#sessionize.sessionize-wrapper .sz-modal__close {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 8px !important;
    border: 0;
    border-left: 1px solid rgba(17,17,17,0.1);
    border-bottom: 1px solid rgba(17,17,17,0.1);
    font-size: 16px;
    line-height: 1;
    color: rgba(17,17,17,0.8);
    border-radius: 0;
    border-bottom-left-radius: 4px;
    background-color: transparent
}

#sessionize.sessionize-wrapper .sz-powered-by {
    position: relative;
    margin-top: 16px;
    display: block;
    font-size: 11px;
    line-height: 1.5;
    text-align: center;
    color: rgba(17,17,17,0.6)
}

#sessionize.sessionize-wrapper .sz-powered-by span {
    color: rgba(17,17,17,0.5);
    font-weight: bold;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-powered-by strong {
    color: rgba(17,17,17,0.5);
    font-weight: bold;
    transition: all .15s ease-in
}

#sessionize.sessionize-wrapper .sz-powered-by a {
    display: inline-block;
    border: none;
    color: rgba(17,17,17,0.5);
    text-decoration: none
}

#sessionize.sessionize-wrapper .sz-powered-by a:hover,#sessionize.sessionize-wrapper .sz-powered-by a:focus,#sessionize.sessionize-wrapper .sz-powered-by a:active {
    color: rgba(17,17,17,0.5)
}

#sessionize.sessionize-wrapper .sz-powered-by a:hover span,#sessionize.sessionize-wrapper .sz-powered-by a:focus span,#sessionize.sessionize-wrapper .sz-powered-by a:active span {
    color: rgba(17,17,17,0.6)
}

#sessionize.sessionize-wrapper .sz-powered-by a:hover strong,#sessionize.sessionize-wrapper .sz-powered-by a:focus strong,#sessionize.sessionize-wrapper .sz-powered-by a:active strong {
    color: #1ab394 !important
}

#sessionize.sessionize-wrapper .sz-day__title {
    padding: 12px 4px;
    font-size: 32px;
    text-align: center
}

#sessionize.sessionize-wrapper .sz-spinner {
    width: 40px;
    height: 40px;
    margin: 100px auto;
    background-color: #B9BABA;
    border-radius: 100%;
    -webkit-animation: sz-scaleout 1.0s infinite ease-in-out;
    animation: sz-scaleout 1.0s infinite ease-in-out
}

#sessionize.sessionize-wrapper .sz-hide-visually {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

@-webkit-keyframes sz-scaleout {
    0% {
        -webkit-transform: scale(0)
    }

    100% {
        -webkit-transform: scale(1);
        opacity: 0
    }
}

@keyframes sz-scaleout {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@keyframes sz-dot-pulse {
    0%,100% {
        transform: scale(1.1)
    }

    50% {
        transform: scale(0.9)
    }
}

              `}
          </style>
        `;
        
        // Insert the custom script before the closing </body> tag
        if (activeView !== 'calendar' ) {
          // if (html.includes('</body>')) {
          //   html = html.replace('</body>', `${customScript}</body>`);
          // } else {
          //   // If no body tag, just append our content
          // }
          // Strip out any <script> tags for safety before injecting
          // html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
          html = customScript + html;
        } else {
          html = `<style>
          
#sessionize.sessionize-wrapper a {
    color: #111;
    text-decoration: none;
    border-bottom: none;
    transition: all .15s ease-in
}
    </style>` + html;
        }
        
        setIframeContent(html);
      } catch (error) {
        console.error('Error loading schedule:', error);
        setIframeContent('<p>Error loading schedule. Please try again later.</p>');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHtml();
  }, [activeView]);
  // Print informative log on mount
  React.useEffect(() => {
    // Color code: blue; Stage: MOUNT
    // eslint-disable-next-line no-console
    console.log('%c[INFO][SCHEDULE][MOUNT][2025-05-20T10:17:04-07:00] /schedule page mounted', 'color: #2563eb; font-weight: bold;');
  }, []);

  return (
    <>
      {/* <Head>
        <title>World's Fair 2025 Schedule</title>
        <meta name="description" content="Full calendar view of the AI Engineer World's Fair 2025 schedule." />
      </Head> */}
      {/* [INFO][2025-05-20T10:19:31-07:00] Explicit Header inclusion for /schedule */}
      {/* [INFO][2025-05-20T10:54:38-07:00] Header always visible for /schedule */}
      <Header path="/schedule" alwaysShow />
      {/* [INFO][2025-05-20T10:29:27-07:00] Ultra-compact, modern horizontal info bar for schedule CTAs */}
      {/* <section className="w-full bg-stone-50 border-b border-stone-200 py-6 mb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 px-2 md:px-4">
          
          <div className="flex-1 flex flex-col items-center md:items-start justify-center py-2 px-2">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-3 shadow transition text-lg w-full md:w-auto"
              onClick={() => window.open('https://ti.to/ai-engineer/worlds-fair-2025', '_blank')}
            >
              🎟️ Buy 2025 Tickets
            </button>
          </div>
          <div className="hidden md:block h-10 border-l border-stone-300 mx-4" />
          
          <div className="flex-1 flex gap-4 items-center md:items-end justify-center py-2 px-2">
            <div className="font-semibold text-base md:text-lg mb-2 text-center md:text-right">📬 Get updates</div>
            <NewsletterFormThree onSuccess={() => console.log('[INFO][NEWSLETTER][SCHEDULE] Signup success!')} />
          </div>
        </div>
      </section> */}
      <main className="min-h-screen bg-stone-100 py-32">
        <div className="max-w-full mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">World's Fair 2025 Schedule</h1>
          
          {/* Venue info box */}
          <div className="max-w-2xl mx-auto px-4 mb-8">
            <a
              href="https://maps.app.goo.gl/3BqJtoYUmYGr94Va9"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition shadow-md p-5 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-lg text-blue-800">SF Marriott Marquis, June 3–5, 2025 &middot; San Francisco</span>
              </div>
              <div className="text-blue-900">Foothill/SOMA rooms are on Level 2</div>
              <div className="text-blue-900">Golden Gate Ballrooms are on B1</div>
              <div className="text-blue-900">Yerba Buena Ballrooms and Salons are on B2</div>
              
              <div className="text-blue-700 underline mt-1">View on Google Maps</div>
            </a>
          </div>
          
          {/* Import instructions */}
          <div className="mb-8">
            <p className="text-center max-w-2xl mx-auto">
              To import all sessions to your calendar, click this{' '}
              <a href="https://sessionize.com/api/v2/e70d4iqk/view/All" className="underline hover:text-blue-800">iCal</a> link. <br /> 
              For hackers:{' '}
              <a href="https://ai.engineer/sessions-speakers-details.json" className="underline hover:text-blue-800">Get all sessions in JSON</a>{' '}
              (or{' '}
              <a href="https://sessionize.com/api/v2/w3hd2z8a/view/All" className="underline hover:text-blue-800">raw JSON</a> or 
              <a href="https://sehttps://sessionize.com/api/v2/w3hd2z8a/view/Speakers" className="underline hover:text-blue-800">speakers JSON</a> 
              ) for your own vibecoded view!
              We manually update this JSON dump regularly but the Sessionize schedule is the most up to date source of truth.
            </p>  
          </div>

          {/* Schedule View Tabs */}
          <div className="flex justify-center space-x-2 mb-4 items-center gap-2">
            Official Views (guaranteed up to date):
            <ScheduleViewButton 
              activeView={activeView}
              viewName="calendar"
              label="Calendar"
              onClick={() => setActiveView("calendar" as ScheduleView)}
            />
            {/* <ScheduleViewButton 
              activeView={activeView}
              viewName="list"
              label="List"
              onClick={() => setActiveView("list" as ScheduleView)}
            /> */}
            <button
              className="px-4 py-2 rounded-md cursor-pointer transition-colors bg-gray-200 text-gray-700 hover:bg-gray-200 border border-gray-400"
              onClick={() => router.push('/schedule-list')}
            >
              List View
            </button>
          </div>
          <div className="max-w-2xl text-md mx-auto mb-4 gap-2">
            Unofficial Views (may be out of date):
            {' '}
              <a href="https://aie-swipe.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@noodlesoup's app</a> (Tinder-style talk discovery)  or <a href="https://worlds-fair-schedule.agpallav.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">@pallavmac's app</a> (list+bookmarking). 
          </div>

          {/* Schedule Iframe */}
          <div
            className={
              `relative border rounded overflow-hidden mb-8 ` +
              (activeView === "detailed"
                ? "w-full max-w-4xl mx-auto h-[80vh]"
                : activeView === "list"
                ? "w-full max-w-4xl mx-auto h-[70vh]"
                : "w-full h-[90vh]")
            }
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <p>Loading schedule...</p>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                srcDoc={iframeContent}
                frameBorder="0"
                title="World's Fair 2025 Schedule"
                sandbox="allow-scripts allow-same-origin"
              />
            )}
          </div>

          <p className="text-center mt-8 mb-16">
            <span className="uppercase font-mono bg-gray-600 p-1 rounded-sm text-yellow-200">
              IMPORTANT
            </span>{" "}
            The full schedule is not yet up, as some sessions are yet to be finalized. Obvious gaps in the schedule will be filled.
            {/* Our{' '}
            <a
              className="text-blue-500 font-bold hover:text-blue-400"
              href="/schedule"
            >
              full talk schedule is now published here
            </a> */}
          </p>
        </div>
      </main>
    </>
  );
};

export default SchedulePage;
