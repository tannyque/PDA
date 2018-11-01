require( 'minitest/autorun' )
require( 'minitest/rg' )
require_relative( '../card')
require_relative( '../testing_task_2' )

class TestCardGame < MiniTest::Test

  def setup()
    @card1 = Card.new("Ace", 1)
    @card2 = Card.new("Diamonds", 8)
    @cardgame = CardGame.new()
  end

  def test_check_for_ace()
    assert_equal(true, @cardgame.checkforAce(@card1))
  end

  def test_highest_card()
    assert_equal(8, @cardgame.highest_card(@card1,@card2))
  end

  def test_total()
    cards = [@card1, @card2]
    assert_equal("You have a total of 9", @cardgame.cards_total(cards))
  end

end
