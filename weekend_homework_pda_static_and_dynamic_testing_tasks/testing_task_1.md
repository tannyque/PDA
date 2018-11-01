### Testing task 1:

#### Carry out static testing on the code below by commenting on any errors that you see:
```ruby

require_relative('card.rb')
class CardGame

  #IF statement should be checking if the card value is exactly equal to 1, not assigning it
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # "dif" is misspelled, it should be spelled "def". A comma is needed between card1 and card 2 to separate them.
  if card1.value > card2.value
    return card.name #should be card1.value
  else
    card2
  end
end
end # extra end is unncessary

def self.cards_total(cards)
  total # total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
