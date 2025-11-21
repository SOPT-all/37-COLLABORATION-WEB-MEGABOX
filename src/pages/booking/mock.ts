// api/v1/recent-dates 가능한 응답 예시
export const mockDates = [
  '2025-11-21',
  '2025-11-22',
  '2025-11-23',
  '2025-11-24',
  '2025-11-25',
  '2025-11-26',
  '2025-11-27',
];

// api/v1/cinemas 가능한 응답 모음 (파라미터에 따라 아래 중 일부 반환)
export const mockCinema = [
  { cinemas: ['강남', '코엑스', '청담'] },
  { cinemas: ['코엑스', '센트럴', '성수', '신촌'] },
  { cinemas: ['강남', '코엑스', '청담'] },
  { cinemas: ['강남', '코엑스', '동대문'] },
  { cinemas: ['강남', '청담', '신촌'] },
  { cinemas: ['센트럴', '성수', '동대문'] },
  { cinemas: ['강남', '코엑스', '청담'] },
];

// api/v1/showtimes 가능한 응답 모음 (파라미터에 따라 아래 중 일부 반환)
export const mockShowtimes = [
  {
    cinemaName: '강남',
    movies: [
      {
        movieTitle: '나우 유 씨 미 3',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 1,
                startTime: '2025-11-16T09:30:00',
                endTime: '2025-11-16T11:22:00',
                seatCount: 120,
                leftSeatCount: 65
              }
            ]
          },
          {
            theaterName: '2관',
            screenType: 'IMAX',
            showtimes: [
              {
                showtimeId: 4,
                startTime: '2025-11-16T22:40:00',
                endTime: '2025-11-17T00:32:00',
                seatCount: 180,
                leftSeatCount: 77
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 주술회전: 회옥·옥절',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 11,
                startTime: '2025-11-18T20:40:00',
                endTime: '2025-11-18T22:30:00',
                seatCount: 120,
                leftSeatCount: 37
              }
            ]
          }
        ]
      },
      {
        movieTitle: '프레데터: 죽음의 땅',
        theaters: [
          {
            theaterName: '2관',
            screenType: 'IMAX',
            showtimes: [
              {
                showtimeId: 23,
                startTime: '2025-11-22T19:30:00',
                endTime: '2025-11-22T21:17:00',
                seatCount: 180,
                leftSeatCount: 46
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 귀멸의 칼날: 무한성편',
        theaters: [
          {
            theaterName: '2관',
            screenType: 'IMAX',
            showtimes: [
              {
                showtimeId: 15,
                startTime: '2025-11-20T12:10:00',
                endTime: '2025-11-20T14:45:00',
                seatCount: 180,
                leftSeatCount: 32
              }
            ]
          }
        ]
      },
      {
        movieTitle: '퍼스트 라이드',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 13,
                startTime: '2025-11-19T16:10:00',
                endTime: '2025-11-19T18:06:00',
                seatCount: 120,
                leftSeatCount: 59
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '코엑스',
    movies: [
      {
        movieTitle: '나우 유 씨 미 3',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 2,
                startTime: '2025-11-16T13:10:00',
                endTime: '2025-11-16T15:02:00',
                seatCount: 150,
                leftSeatCount: 43
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 체인소 맨: 레제편',
        theaters: [
          {
            theaterName: 'IMAX관',
            screenType: 'IMAX',
            showtimes: [
              {
                showtimeId: 7,
                startTime: '2025-11-17T19:10:00',
                endTime: '2025-11-17T20:50:00',
                seatCount: 200,
                leftSeatCount: 39
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 주술회전: 회옥·옥절',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 10,
                startTime: '2025-11-18T15:30:00',
                endTime: '2025-11-18T17:20:00',
                seatCount: 150,
                leftSeatCount: 58
              }
            ]
          }
        ]
      },
      {
        movieTitle: '프레데터: 죽음의 땅',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 22,
                startTime: '2025-11-22T15:50:00',
                endTime: '2025-11-22T17:37:00',
                seatCount: 150,
                leftSeatCount: 27
              }
            ]
          }
        ]
      },
      {
        movieTitle: '퍼스트 라이드',
        theaters: [
          {
            theaterName: 'IMAX관',
            screenType: 'IMAX',
            showtimes: [
              {
                showtimeId: 14,
                startTime: '2025-11-19T19:40:00',
                endTime: '2025-11-19T21:36:00',
                seatCount: 200,
                leftSeatCount: 47
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '센트럴',
    movies: [
      {
        movieTitle: '극장판 체인소 맨: 레제편',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 5,
                startTime: '2025-11-17T10:00:00',
                endTime: '2025-11-17T11:40:00',
                seatCount: 110,
                leftSeatCount: 88
              }
            ]
          }
        ]
      },
      {
        movieTitle: '위키드',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 19,
                startTime: '2025-11-21T13:10:00',
                endTime: '2025-11-21T15:50:00',
                seatCount: 110,
                leftSeatCount: 58
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '청담',
    movies: [
      {
        movieTitle: '나우 유 씨 미 3',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 3,
                startTime: '2025-11-16T18:20:00',
                endTime: '2025-11-16T20:12:00',
                seatCount: 130,
                leftSeatCount: 29
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 주술회전: 회옥·옥절',
        theaters: [
          {
            theaterName: '2관',
            screenType: '4DX',
            showtimes: [
              {
                showtimeId: 9,
                startTime: '2025-11-18T12:00:00',
                endTime: '2025-11-18T13:50:00',
                seatCount: 140,
                leftSeatCount: 74
              }
            ]
          }
        ]
      },
      {
        movieTitle: '프레데터: 죽음의 땅',
        theaters: [
          {
            theaterName: '2관',
            screenType: '4DX',
            showtimes: [
              {
                showtimeId: 21,
                startTime: '2025-11-22T11:40:00',
                endTime: '2025-11-22T13:27:00',
                seatCount: 140,
                leftSeatCount: 53
              }
            ]
          },
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 24,
                startTime: '2025-11-22T23:50:00',
                endTime: '2025-11-23T01:37:00',
                seatCount: 130,
                leftSeatCount: 70
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 귀멸의 칼날: 무한성편',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 16,
                startTime: '2025-11-20T16:30:00',
                endTime: '2025-11-20T19:05:00',
                seatCount: 130,
                leftSeatCount: 20
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '성수',
    movies: [
      {
        movieTitle: '극장판 체인소 맨: 레제편',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 6,
                startTime: '2025-11-17T14:20:00',
                endTime: '2025-11-17T16:00:00',
                seatCount: 100,
                leftSeatCount: 52
              }
            ]
          }
        ]
      },
      {
        movieTitle: '위키드',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 18,
                startTime: '2025-11-21T09:00:00',
                endTime: '2025-11-21T11:40:00',
                seatCount: 100,
                leftSeatCount: 66
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '동대문',
    movies: [
      {
        movieTitle: '퍼스트 라이드',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 12,
                startTime: '2025-11-19T13:30:00',
                endTime: '2025-11-19T15:26:00',
                seatCount: 90,
                leftSeatCount: 83
              }
            ]
          }
        ]
      },
      {
        movieTitle: '위키드',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 20,
                startTime: '2025-11-21T18:30:00',
                endTime: '2025-11-21T21:10:00',
                seatCount: 90,
                leftSeatCount: 42
              }
            ]
          }
        ]
      }
    ]
  },
  {
    cinemaName: '신촌',
    movies: [
      {
        movieTitle: '극장판 체인소 맨: 레제편',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 8,
                startTime: '2025-11-17T23:50:00',
                endTime: '2025-11-18T01:30:00',
                seatCount: 95,
                leftSeatCount: 61
              }
            ]
          }
        ]
      },
      {
        movieTitle: '극장판 귀멸의 칼날: 무한성편',
        theaters: [
          {
            theaterName: '1관',
            screenType: '2D',
            showtimes: [
              {
                showtimeId: 17,
                startTime: '2025-11-20T21:10:00',
                endTime: '2025-11-20T23:45:00',
                seatCount: 95,
                leftSeatCount: 71
              }
            ]
          }
        ]
      }
    ]
  }
];
