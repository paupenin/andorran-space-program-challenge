# Andorran Space Program: Inventory Management Challenge

In a whimsical alternate reality, Andorra, known for its beautiful ski slopes and quaint villages, has ambitiously launched its own space program.

The mission: explore the cosmos to find new ski destinations and promote interstellar tourism.

Our "WDIPI", *Where Did I Put It*, department is working on an Asset Inventory Management software to track space gear, luckly we have a magical warehouse which fits the entire universe on it so we don't have to worry about it.

## Challenge Overview:

**Negative numbers**

Somehow our inventory got corrupted and some of our items not just disappeared but also went negative.

The bureaucrats of the Andorran Space Program decided that from now on item variants wihout quantity should not appear.

Unfortunately we cannot modify data in the production database because the paper where we have written the password got eaten by a cow.

**Radiation Shielding**

We developed a new material called "Andorranium" made with dried tobacco leaves and cheap alcohol, it provides Space radiation protection allowing our space gear to last longer in space.

This new material is still in development and has three categories: Level 1, Level 2 and Level 3 depending on the materials mixture.

All new products that have Andorranium must store the Radiation Shielding. All products without Andorranium should be considered as a Level 0 radiation shielding.

If the mixture has more tobacco than alcohol the Radiation Shielding must be Level 1, if they add more alcohol than tobacco must be Level 3, and if they are equal Level 2.

## Challenge Objectives:

1. Do a few changes to the API, APP, and SDK.
2. Add Tests to verify that everything works as expected.
3. Have fun and answer distracting trivia questions while you code.

## Rules:

- Do not modify Database data or connector, don't change `db.ts`.
- All tests must pass, existing tests must not be changed.
- Finish all tasks before doing BONUS.

## Tasks:

### API
**Negative numbers**

From now on, variants with zero or negative `quantity` doesn't exists.

1. They should not be returned in `GET /inventory` or `GET /inventory/:id`.
2. When importing a variant, delete it if zero or negative quantity. We must still allow the import of negative quantities to remove items.
3. When removing variants delete the variant for zero or negative quantities.

**Radiation Shielding**

We have to accept Radiation Shielding for our variants.

1. When retrieving, creating or updating variants we must accept an optional `radiationShielding` as a number.

**BONUS**

1. Add `totalVariants` and `totalQuantity`to `GET /inventory`.

### APP

**Negative numbers**

1. We want a quick button to remove a variant, add a button "Remove all quantity" to remove a variant for each of the variants.

**Radiation Shielding**

1. Add 2 inputs called "Tobacco amount" and "Alcohol amount". This fields are optional but only if both are present we have to add the Radiation Shielding.
2. Add the proper Radiation Shielding for Variants using Andorranium.

**BONUS**

1. Display `totalVariants` and `totalQuantity` in "List of Items" Section.
2. Update the application `totalVariants` and `totalQuantity` when creating new variants or updating quantities.

### SDK

**Radiation Shielding**

1. Update the Radiation Mesuring SDK to reduce radiation based on the Radiation Shielding. The Radiation shielding reduces radiation by 20 points for Level 1, 1/3 for Level 2, and 39% for Level 3.

