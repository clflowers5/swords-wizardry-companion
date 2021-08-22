import { useState } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import Layout from "components/layout";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "components/inputs/input";
import calculateLootDivision from "../utils/calculate-loot-division";
import Button from "../components/inputs/button";

const schema = yup.object().shape({
  totalLoot: yup.number("Required").typeError("Required").required("Required"),
  fullShares: yup.number("Required").typeError("Required").required("Required"),
  halfShares: yup.number("Required").typeError("Required").required("Required"),
  quarterShares: yup
    .number("Required")
    .typeError("Required")
    .required("Required"),
});

function FormInput({ rhfControl, rhfErrors, defaultValue, name, label }) {
  return (
    <>
      <Controller
        defaultValue={defaultValue}
        name={name}
        control={rhfControl}
        render={({ field }) => <Input label={label} {...field} />}
      />
      {rhfErrors[name] && <span>{rhfErrors[name].message}</span>}
    </>
  );
}

FormInput.propTypes = {
  rhfControl: PropTypes.object,
  rhfErrors: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  label: PropTypes.node,
};

function LootXpCalc() {
  const [lootDivision, setLootDivision] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const lootDivision = calculateLootDivision(data);
    setLootDivision(lootDivision);
  };

  return (
    <Layout>
      {/* todo: cf - extract to form component */}

      <form className="border-b-2 pb-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full mt-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Total Loot / XP"
              name="totalLoot"
              rhfErrors={errors}
            />
          </div>

          <div className="mt-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Full Shares"
              name="fullShares"
              rhfErrors={errors}
            />
          </div>

          <div className="mt-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Half Shares"
              name="halfShares"
              rhfErrors={errors}
            />
          </div>

          <div className="mt-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Quarter Shares"
              name="quarterShares"
              rhfErrors={errors}
            />
          </div>
        </div>

        <div className="mt-2">
          <Button>Submit</Button>
        </div>
      </form>

      {lootDivision && (
        <div className="grid grid-flow-row grid-cols-3 grid-rows-4">
          <div className="font-bold underline">Share Type</div>
          <div className="font-bold underline">Per Share</div>
          <div className="font-bold underline">Total</div>

          <div>Full Share:</div>
          <div>{lootDivision.full}</div>
          <div>{lootDivision.totalFull}</div>

          <div>Half Share:</div>
          <div>{lootDivision.half}</div>
          <div>{lootDivision.totalHalf}</div>

          <div>Quarter Share:</div>
          <div>{lootDivision.quarter}</div>
          <div>{lootDivision.totalQuarter}</div>
        </div>
      )}
    </Layout>
  );
}

export default LootXpCalc;
