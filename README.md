# Andorran Space Program: Inventory Management Challenge

In a whimsical alternate reality, Andorra, known for its beautiful ski slopes and quaint villages, has ambitiously launched its own space program.

The mission: explore the cosmos to find new ski destinations and promote interstellar tourism.

## Challenge Overview:

**Negative numbers**

Somehow our inventory got corrupted and some of our items not just disappeared but also went negative.

The burocrats of the Andorran Space Program decided that from now on item variants wihout quantity should not appear.

Unfourtanetly we cannot modify data in the production database because the password got lost.

**Radiation Shielding**

We developed a new material called "Andorranium" made with dried tobacco leaves, cheap alcohol, and Youtubers, it provides Space radiation protection allowing our materials to last longer in space.

This new material is still in development and it's values can be 1, 2 or 3 depending if Youtuber's car is a Porsche (1), Ferrari (2), or Lamborgini (3).

All new products that uses Andorranium can have a `radiationShielding` value. All products without Andorranium should be considered with a radiation shielding of 0.

## Challenge Objectives:

1. Do a few changes to the API, APP, and SDK.
2. Add Tests to verify that everything works as expected.
3. Have fun and answer distracting trivia questions while you code.

## Rules:

- Do not modify Database data or connector (don't change `db.ts`).
- All tests must pass, existing tests must not be changed.
- Finish all items before doing BONUS.

## Tasks:

### API
**Negative numbers**

From now on, items with zero or negative `quantity` doesn't exists.

1. They should not be returned in `GET /inventory` or `GET /inventory/:id`.
2. Prevent adding new ones if zero or negative. When updating delete if zero or negative. Se still must allow to import negative quantities to remove items.
3. When removing variants delete the variant for zero or negative quantities.

**Radiation Shielding**

We have to accept Radiation Shielding for our variants.

1. When retrieving, creating or updating variants we must accept an optional `radiationShielding` as a number.

**BONUS**

1. Add `totalVariants` and `totalQuantity`to `GET /inventory`.

### APP

**Radiation Shielding**

1. Add an input called "Youtuber's car". If the user introduces: `porsche`, `ferrari`, or `lamborgini` add `radiationShielding` as a number to the update request.

**BONUS**

1. Display `totalVariants` and `totalQuantity` in "List of Items" Section.
2. Update the application `totalVariants` and `totalQuantity` when creating new variants or updating quantities.


