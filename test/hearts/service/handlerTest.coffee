Arena = require '../../../hearts/arena'
Handler = require '../../../hearts/service/handler'
Card = require '../../../hearts/game/card'
Suit = require '../../../hearts/game/suit'
Rank = require '../../../hearts/game/rank'
types = require '../../../hearts/lib/hearts_types'
Factory = require '../factory'
should = require("should")

describe "Handler", ->
  beforeEach ->
    @arena = new Arena()
    @arena.createPlayer()
    @arena.createPlayer()
    @arena.createPlayer()
    @handler = new Handler(@arena)

  it "implements everything declared in the service"

  describe "#enter_arena", ->
    it "returns when there is a game to be played", (done) ->
      @handler.enter_arena (err, response) ->
        should.not.exist(err)
        response.ticket.agentId.should.be.a("string")
        response.ticket.gameId.should.be.a("string")
        done()

      @arena.createGame(@arena.waitingRoom[0..3])

  describe "#get_game_info", ->
    beforeEach ->
      @ticket = new types.Ticket(agentId: "123", gameId: "456")

    it "returns game info", (done) ->
      @handler.get_game_info @ticket, (err, gameInfo) ->
        should.not.exist(err)
        gameInfo.position.should.equal(types.Position.NORTH)
        done()

  describe "#get_hand", ->
    beforeEach ->
      @game = Factory.createGame(arena: @arena)
      @player = @game.players[0]
      @ticket = new types.Ticket(agentId: @player.id, gameId: @game.id)
      @game.states.startingGame.run()
      @game.states.dealing.run()

    it "returns the players hand", (done) ->
      @handler.get_hand @ticket, (err, hand) ->
        should.not.exist(err)
        hand.length.should.equal(13)
        done()

    it "maps the cards to thrift types", (done) ->
      @player.waitForHand = (callback) ->
        ranks = Rank.all()
        cards = [
          new Card(Suit.CLUBS, Rank.TWO)
          new Card(Suit.SPADES, Rank.FOUR)
          new Card(Suit.DIAMONDS, Rank.ACE)
          new Card(Suit.HEARTS, Rank.EIGHT)
          new Card(Suit.SPADES, Rank.QUEEN)
        ]
        callback(cards)


      @handler.get_hand @ticket, (err, cards) ->
        should.not.exist(err)
        cards[0].suit.should.equal types.Suit.CLUBS
        cards[0].rank.should.equal types.Rank.TWO
        cards[1].suit.should.equal types.Suit.SPADES
        cards[1].rank.should.equal types.Rank.FOUR
        cards[2].suit.should.equal types.Suit.DIAMONDS
        cards[2].rank.should.equal types.Rank.ACE
        cards[3].suit.should.equal types.Suit.HEARTS
        cards[3].rank.should.equal types.Rank.EIGHT
        cards[4].suit.should.equal types.Suit.SPADES
        cards[4].rank.should.equal types.Rank.QUEEN
        done()
