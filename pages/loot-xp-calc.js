import { useState } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import Layout from "components/layout";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "components/inputs/input";
import calculateLootDivision from "../utils/calculate-loot-division";

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
}

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

      <form className='border-b-2 pb-4 mb-4' onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="flex-2 m-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Total Loot / XP"
              name="totalLoot"
              rhfErrors={errors}
            />
          </div>

          <div className="flex-1 m-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Full Shares"
              name="fullShares"
              rhfErrors={errors}
            />
          </div>

          <div className="flex-1 m-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Half Shares"
              name="halfShares"
              rhfErrors={errors}
            />
          </div>

          <div className="flex-1 m-2">
            <FormInput
              rhfControl={control}
              defaultValue={0}
              label="Quarter Shares"
              name="quarterShares"
              rhfErrors={errors}
            />
          </div>
        </div>

        <input type="submit" />
      </form>

      {lootDivision && (
        <div>
          <div>
            <span>Full Share:</span>
            {' '}
            <span>{lootDivision.full}</span>
          </div>
          <div>
            <span>Half Share:</span>
            {' '}
            <span>{lootDivision.half}</span>
          </div>
          <div>
            <span>Quarter Share:</span>
            {' '}
            <span>{lootDivision.quarter}</span>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default LootXpCalc;
